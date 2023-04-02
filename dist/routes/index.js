"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _productos = _interopRequireDefault(require("./productos.js"));
var _carrito = _interopRequireDefault(require("./carrito"));
var _user = _interopRequireDefault(require("./user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = (0, _express["default"])();
routes.use('/productos', _productos["default"]);
routes.use('/carrito', _carrito["default"]);
routes.use('/user', _user["default"]);
var _default = routes;
exports["default"] = _default;