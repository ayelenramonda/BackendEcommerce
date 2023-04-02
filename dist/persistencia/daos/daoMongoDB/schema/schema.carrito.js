"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarritoModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = new _mongoose["default"].Schema({
  timestamp: {
    type: String
  },
  productos: {
    type: Array
  },
  username: {
    type: String
  },
  name: {
    type: String
  }
});
var CarritoModel = _mongoose["default"].model('carrito', Schema);
exports.CarritoModel = CarritoModel;