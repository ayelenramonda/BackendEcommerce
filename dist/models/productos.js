"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productosCollectionName = exports.ProductosModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var productosCollectionName = 'producto';
exports.productosCollectionName = productosCollectionName;
var productosSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});
var ProductosModel = _mongoose["default"].model(productosCollectionName, productosSchema);
exports.ProductosModel = ProductosModel;