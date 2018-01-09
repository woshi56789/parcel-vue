import axios from 'axios';
import {PG} from '@u51/pg';
import cache from './cache'
import toast from './toast'

const instance = axios.create();

let getUserInfoPromise = PG.exec('u51GetUserInfo');

PG.on('U51PageResumeEvent', () => {
  getUserInfoPromise = PG.exec('u51GetUserInfo');
});

instance.interceptors.request.use(config => {
  toast.loading(config.toastText)
  return config
}, error => {
  toast.close('lastMsg')
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(response => {
  toast.close(response.config.toastText)
  return response.data
}, error => {
  toast.close(error.config ? error.config.toastText : 'lastMsg')
  if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.length) {
    toast.info(error.response.data.errors[0].message)
  } else if (error.message.indexOf('timeout') === 0) {
    toast.error('网络异常')
  } else {
    toast.error('出了点问题，暂时加载不出来，请稍后再来吧')
  }
  return Promise.reject(error)
})


function createAPI(baseURL) {
  return function (config) {
    config = config || {};

    const requireUserLogin = typeof config.opts.requireUserLogin === 'undefined' ?  true : config.opts.requireUserLogin;
    config.toastText = config.opts.toastText || '';
    delete config.opts.toastText;

    config.cacheData = config.opts.cacheData;
    delete config.opts.cacheData;

    if (config.method === 'get') {
      config.params = config.opts
    } else {
      // 有些时候，部分数据要放在query中
      if (config.opts.params) {
        config.params = config.opts.params
        delete config.opts.params
      }
      config.data = config.opts
    }

    const promises = [PG.exec('u51GetLogEvent')];
    if (requireUserLogin) {
        promises.push(getUserInfoPromise);
    }

    return Promise.all(promises).then(values => {
      const [log, user] = values;
      let userHeader = {};
      if (user && user.uid && user.token) {
        userHeader = {
          userId: user.uid,
          Authorization: `encrypt ${user.token}`,
        };
    } else if (requireUserLogin) {
        toast.close(config.toastText || 'lastMsg');
        toast.error('出了点问题，暂时加载不出来，请稍后再来吧');
        // 没有用户信息，但是接口需要用户信息
        return Promise.reject({
            code: 401,
        });
    }
      config.headers = {
        ...userHeader,
        'X-Tracking-ID': log.tid
      };
      return cache(Object.assign({}, {
        baseURL: baseURL
      }, config), instance)
    });
  };
}

/**
 * 处理restful接口
 * @param url
 * @param opts
 * @returns {*}
 */

function convertRESTAPI(url, opts) {
  if (!opts || !opts.path) return url;

  const pathKeys = Object.keys(opts.path);

  pathKeys.forEach((key) => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g');
    url = url.replace(r, opts.path[key]);
  });

  return url;
}


export {
  createAPI,
  convertRESTAPI
};
