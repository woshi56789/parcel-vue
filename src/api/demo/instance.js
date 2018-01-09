import { createAPI } from '../util';
import config from '../config';

const baseUrl = {
  mock: '/mock/',
  dev: '',
  pre: '',
  production: 'https://web.u51.com/api.u51.com',
}[process.env.NODE_ENV === 'development' ? config.env : process.env.NODE_ENV];

export default createAPI(baseUrl);
