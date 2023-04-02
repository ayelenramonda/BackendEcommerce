"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = new _mongoose["default"].Schema({
  author: {
    type: String,
    require: true
  },
  timestamp: {
    type: String
  },
  text: {
    type: String
  }
});
var MessageModel = _mongoose["default"].model('mensajes', Schema);
exports.MessageModel = MessageModel;