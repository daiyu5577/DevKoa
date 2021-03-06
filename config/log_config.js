// TRACE - blue
// DEBUG - cyan
// INFO - green
// WARN - yellow
// ERROR - red
// FATAL - magenta

var path = require('path');

//日志根目录
var baseLogPath = path.resolve(__dirname, '../logs')

//错误日志目录
var errorPath = "/error";
//错误日志文件名
var errorFileName = "error";
//错误日志输出完整路径
var errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
//var errorLogPath = path.resolve(__dirname, "../logs/error/error");

//响应日志目录
var responsePath = "/response";
//响应日志文件名
var responseFileName = "response";
//响应日志输出完整路径
var responseLogPath = baseLogPath + responsePath + "/" + responseFileName;

module.exports = {
  //日志格式等设置
  appenders: {
    "errorLogger": {
      "type": "dateFile",
      "filename": errorLogPath,
      "pattern": "-yyyy-MM-dd.log",
      "alwaysIncludePattern": true,
      "encoding": "utf-8",
      "maxLogSize": 1000,
      "numBackups": 3,
      "path": errorPath
    },
    "resLogger": {
      "type": "dateFile",
      "filename": responseLogPath,
      "pattern": "-yyyy-MM-dd.log",
      "alwaysIncludePattern": true,
      "encoding": "utf-8",
      "maxLogSize": 1000,
      "numBackups": 3,
      "path": responsePath
    },
  },
  replaceConsole: true,
  //供外部调用的名称和对应设置定义
  categories: {
    "default": {
      "appenders": ["resLogger"],
      "level": "info"
    },
    "resLogger": {
      "appenders": ["resLogger"],
      "level": "info"
    },
    "errorLogger": {
      "appenders": ["errorLogger"],
      "level": "error"
    }
  },
  "baseLogPath": baseLogPath
}