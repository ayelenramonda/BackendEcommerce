"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.args = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _yargs = _interopRequireDefault(require("yargs"));
var _minimist = _interopRequireDefault(require("minimist"));
var _helpers = require("yargs/helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var argv = (0, _yargs["default"])((0, _helpers.hideBin)(process.argv)).argv;
_dotenv["default"].config();
var _default = {
  MONGO_ATLAS: process.env.MONGO_ATLAS,
  PUERTO: argv.port || 8080,
  admin: true,
  CRYPTO_SECRET: process.env.CRYPTO_SECRET,
  SECRET_STRING: process.env.SECRET_STRING
};
exports["default"] = _default;
var optionalArgsObject = {
  alias: {
    p: 'puerto',
    m: 'modo'
  },
  "default": {
    p: 8080,
    m: 'fork'
  }
};
var args = (0, _minimist["default"])(process.argv.slice(2), optionalArgsObject);
exports.args = args;