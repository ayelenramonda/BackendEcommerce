"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warnLogger = exports.infoLogger = exports.errorLogger = void 0;
var _log4js = _interopRequireDefault(require("log4js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_log4js["default"].configure({
  appenders: {
    console: {
      type: "console"
    },
    fileAppenderWarn: {
      type: "file",
      filename: "./logs/warn.log"
    },
    fileAppenderError: {
      type: "file",
      filename: "./logs/error.log"
    }
  },
  categories: {
    "default": {
      appenders: ["console"],
      level: "info"
    },
    myLoggerWarn: {
      appenders: ["fileAppenderWarn"],
      level: "warn"
    },
    myLoggerError: {
      appenders: ["fileAppenderError"],
      level: "error"
    }
  }
});
var infoLogger = _log4js["default"].getLogger("default");
exports.infoLogger = infoLogger;
var warnLogger = _log4js["default"].getLogger("myLoggerWarn");
exports.warnLogger = warnLogger;
var errorLogger = _log4js["default"].getLogger("myLoggerError");
exports.errorLogger = errorLogger;