const logUtil = require('../utils/log_utils');
module.exports = async (ctx, next) => {
  //响应开始时间
  const start = new Date();
  //响应间隔时间
  var ms;
  try {
    //开始进入到下一个中间件
    await next();

    ms = new Date() - start;
    //记录响应日志
    logUtil.resLogger(ctx, ms);

  } catch (error) {
    // catch后 app.on error 捕获不到完整的ERROR信息
    ms = new Date() - start;
    //记录异常日志
    logUtil.errLogger(ctx, error, ms);
  }
}