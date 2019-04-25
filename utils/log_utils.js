//加载配置文件
var log4js = require('log4js');
var log_config = require('../config/log_config');
log4js.configure(log_config);

let formatError = (ctx, err, costTime) => {
  let method = ctx.method
  let url = ctx.url
  let body = ctx.request.body
  let userAgent = ctx.header.userAgent
  return 'method：' + method + '\n' +
         'url：' + url + '\n' +
         'body：' + JSON.stringify(body) + '\n' +
         'costTime：' + costTime + '\n' +
         'userAgent：' + JSON.stringify(userAgent) + '\n' +
         'error：' + err
}
let formatRes = (ctx,costTime) => {
  let method = ctx.method
  let url = ctx.url
  let body = ctx.request.body
  let response = ctx.response
  return 'method：' + method + '\n' +
         'url：' + url + '\n' +
         'body：' + JSON.stringify(body) + '\n' +
         'costTime：' + costTime + '\n' +
         'response：' + JSON.stringify(response) + '\n'
}

// log4js.js
let logger = {}
let errorLogger = log4js.getLogger('errorLogger')
let resLogger = log4js.getLogger('resLogger')


// 封装错误日志
logger.errLogger = (ctx, error, resTime) => {
    if(ctx && error) {
        errorLogger.error(formatError(ctx, error, resTime))
    }
}
// 封装响应日志
logger.resLogger = (ctx, resTime) => {
    if(ctx) {
        resLogger.info(formatRes(ctx, resTime))
    }
}

module.exports = logger;