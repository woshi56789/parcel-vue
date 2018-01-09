import instance from './instance';
import { convertRESTAPI } from '../util';

/** 获取用户批量预约还款详情页信息. */
function gcprepaymentgateway_api_v1_autoreservation_batchdetail_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/auto-reservation/batch-detail',
    opts: opts
  });
}

/** 获取用户可批量预约的账单 */
function gcprepaymentgateway_api_v1_autoreservation_billlist_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/auto-reservation/bill-list',
    opts: opts
  });
}

/** 用户获取预约还款配置信息 */
function gcprepaymentgateway_api_v1_autoreservation_configinfo_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/auto-reservation/config-info',
    opts: opts
  });
}

/** 获取用户自动预约还款详情页信息. */
function gcprepaymentgateway_api_v1_autoreservation_detail_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/auto-reservation/detail',
    opts: opts
  });
}

/** 用户取消预约还款订单. */
function gcprepaymentgateway_api_v1_autoreservation_autoId_cancelreservation_post(opts = {}) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/gcp-repayment-gateway/api/v1/auto-reservation/{autoId}/cancel-reservation', opts),
    opts: opts
  });
}

/** 用户取消预约还款订单. */
function gcprepaymentgateway_api_v1_autoreservation_orderNo_cancel_reservation_post(opts = {}) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/gcp-repayment-gateway/api/v1/auto-reservation/{orderNo}/cancel/reservation', opts),
    opts: opts
  });
}

/** 添加卡时的卡bin校验. */
function gcprepaymentgateway_api_v1_card_verify_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/card/verify',
    opts: opts
  });
}

/** 获取实付信息（包含信用卡和储蓄卡）. */
function gcprepaymentgateway_api_v1_cardrepay_cardlist_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/cardrepay/cardlist',
    opts: opts
  });
}

/** 签约信用卡. */
function gcprepaymentgateway_api_v1_creditrepay_signcard_post(opts = {}) {
  return instance({
    method: 'post',
    url:  '/gcp-repayment-gateway/api/v1/creditrepay/signcard',
    opts: opts
  });
}

/** 签约信用卡绑卡验证接口. */
function gcprepaymentgateway_api_v1_creditrepay_validateCode_validatecard_post(opts = {}) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/gcp-repayment-gateway/api/v1/creditrepay/{validateCode}/validatecard', opts),
    opts: opts
  });
}

/** 存管绑卡(发送短信验证码). */
function gcprepaymentgateway_api_v1_deposit_bindcard_post(opts = {}) {
  return instance({
    method: 'post',
    url:  '/gcp-repayment-gateway/api/v1/deposit/bindcard',
    opts: opts
  });
}

/** 存管绑储蓄卡验证码验证. */
function gcprepaymentgateway_api_v1_deposit_cardverify_post(opts = {}) {
  return instance({
    method: 'post',
    url:  '/gcp-repayment-gateway/api/v1/deposit/cardverify',
    opts: opts
  });
}

/** 检查是否需要绑卡. */
function gcprepaymentgateway_api_v1_deposit_checkcard_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/deposit/checkcard',
    opts: opts
  });
}

/** 用户获取还款订单详情. */
function gcprepaymentgateway_api_v1_liferepayment_orderNo_orderinfo_get(opts = {}) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/gcp-repayment-gateway/api/v1/liferepayment/{orderNo}/order-info', opts),
    opts: opts
  });
}

/** 微信支付回调接口. */
function gcprepaymentgateway_api_v1_payment_weixin_callback_post(opts = {}) {
  return instance({
    method: 'post',
    url:  '/gcp-repayment-gateway/api/v1/payment/weixin/callback',
    opts: opts
  });
}

/** 开始获取还款记录. */
function gcprepaymentgateway_api_v1_repayrecord_list_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/repay-record/list',
    opts: opts
  });
}

/** 添加卡时的二要素校验. */
function gcprepaymentgateway_api_v1_repayment_bankcard_verify_post(opts = {}) {
  return instance({
    method: 'post',
    url:  '/gcp-repayment-gateway/api/v1/repayment/bankcard/verify',
    opts: opts
  });
}

/** 创建还款订单. */
function gcprepaymentgateway_api_v1_repayment_create_order_post(opts = {}) {
  return instance({
    method: 'post',
    url:  '/gcp-repayment-gateway/api/v1/repayment/create/order',
    opts: opts
  });
}

/** 用户风控验证处理接口. */
function gcprepaymentgateway_api_v1_repayment_riskverify_post(opts = {}) {
  return instance({
    method: 'post',
    url:  '/gcp-repayment-gateway/api/v1/repayment/risk-verify',
    opts: opts
  });
}

/** 验证人品宝账户余额. */
function gcprepaymentgateway_api_v1_repayment_rpb_amount_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/repayment/rpb/amount',
    opts: opts
  });
}

/** 用户尝试重新获取短信验证码(同一个validToken可获取三次). */
function gcprepaymentgateway_api_v1_repayment_smscode_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/repayment/smscode',
    opts: opts
  });
}

/** 支付宝还款订单. */
function gcprepaymentgateway_api_v1_repayment_trade_alipay_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/repayment/trade/alipay',
    opts: opts
  });
}

/** 微信还款接口. */
function gcprepaymentgateway_api_v1_repayment_weixin_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/repayment/weixin',
    opts: opts
  });
}

/** 微信还款回调接口. */
function gcprepaymentgateway_api_v1_repayment_weixin_callback_post(opts = {}) {
  return instance({
    method: 'post',
    url:  '/gcp-repayment-gateway/api/v1/repayment/weixin/callback',
    opts: opts
  });
}

/** 用户获取还款订单详情接口. */
function gcprepaymentgateway_api_v1_repayment_orderNo_orderinfo_get(opts = {}) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/gcp-repayment-gateway/api/v1/repayment/{orderNo}/order-info', opts),
    opts: opts
  });
}

/** 还款台聚合接口. */
function gcprepaymentgateway_api_v1_repaystation_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/repaystation',
    opts: opts
  });
}

/** 新增或修改应用标签.后台monitor使用 */
function gcprepaymentgateway_api_v1_repayway_apptag_post(opts = {}) {
  return instance({
    method: 'post',
    url:  '/gcp-repayment-gateway/api/v1/repayway/apptag',
    opts: opts
  });
}

/** 获取某个还款方式的应用标签.后台monitor使用 */
function gcprepaymentgateway_api_v1_repayway_msgId_apptag_get(opts = {}) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/gcp-repayment-gateway/api/v1/repayway/{msgId}/apptag', opts),
    opts: opts
  });
}

/** 预约成功还款记录详情. */
function gcprepaymentgateway_api_v1_reservation_detail_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/reservation/detail',
    opts: opts
  });
}

/** 获取预约还款订单记录列表. */
function gcprepaymentgateway_api_v1_reservation_list_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/reservation/list',
    opts: opts
  });
}

/** 还款台获取用户自定预约还款信息. */
function gcprepaymentgateway_api_v1_reservation_reservationinfo_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v1/reservation/reservation-info',
    opts: opts
  });
}

/** 开始获取还款记录. */
function gcprepaymentgateway_api_v2_repayrecord_list_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v2/repay-record/list',
    opts: opts
  });
}

/** 判断是否存在未还记录. */
function gcprepaymentgateway_api_v3_repayrecord_existrecord_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v3/repay-record/existrecord',
    opts: opts
  });
}

/** 开始获取还款记录. */
function gcprepaymentgateway_api_v3_repayrecord_list_get(opts = {}) {
  return instance({
    method: 'get',
    url:  '/gcp-repayment-gateway/api/v3/repay-record/list',
    opts: opts
  });
}

export {
  gcprepaymentgateway_api_v1_autoreservation_batchdetail_get,
  gcprepaymentgateway_api_v1_autoreservation_billlist_get,
  gcprepaymentgateway_api_v1_autoreservation_configinfo_get,
  gcprepaymentgateway_api_v1_autoreservation_detail_get,
  gcprepaymentgateway_api_v1_autoreservation_autoId_cancelreservation_post,
  gcprepaymentgateway_api_v1_autoreservation_orderNo_cancel_reservation_post,
  gcprepaymentgateway_api_v1_card_verify_get,
  gcprepaymentgateway_api_v1_cardrepay_cardlist_get,
  gcprepaymentgateway_api_v1_creditrepay_signcard_post,
  gcprepaymentgateway_api_v1_creditrepay_validateCode_validatecard_post,
  gcprepaymentgateway_api_v1_deposit_bindcard_post,
  gcprepaymentgateway_api_v1_deposit_cardverify_post,
  gcprepaymentgateway_api_v1_deposit_checkcard_get,
  gcprepaymentgateway_api_v1_liferepayment_orderNo_orderinfo_get,
  gcprepaymentgateway_api_v1_payment_weixin_callback_post,
  gcprepaymentgateway_api_v1_repayrecord_list_get,
  gcprepaymentgateway_api_v1_repayment_bankcard_verify_post,
  gcprepaymentgateway_api_v1_repayment_create_order_post,
  gcprepaymentgateway_api_v1_repayment_riskverify_post,
  gcprepaymentgateway_api_v1_repayment_rpb_amount_get,
  gcprepaymentgateway_api_v1_repayment_smscode_get,
  gcprepaymentgateway_api_v1_repayment_trade_alipay_get,
  gcprepaymentgateway_api_v1_repayment_weixin_get,
  gcprepaymentgateway_api_v1_repayment_weixin_callback_post,
  gcprepaymentgateway_api_v1_repayment_orderNo_orderinfo_get,
  gcprepaymentgateway_api_v1_repaystation_get,
  gcprepaymentgateway_api_v1_repayway_apptag_post,
  gcprepaymentgateway_api_v1_repayway_msgId_apptag_get,
  gcprepaymentgateway_api_v1_reservation_detail_get,
  gcprepaymentgateway_api_v1_reservation_list_get,
  gcprepaymentgateway_api_v1_reservation_reservationinfo_get,
  gcprepaymentgateway_api_v2_repayrecord_list_get,
  gcprepaymentgateway_api_v3_repayrecord_existrecord_get,
  gcprepaymentgateway_api_v3_repayrecord_list_get
};
