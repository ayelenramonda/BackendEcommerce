"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asDtoCarr = asDtoCarr;
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var CarritoDTO = /*#__PURE__*/_createClass(function CarritoDTO(_ref) {
  var name = _ref.name,
    productos = _ref.productos;
  _classCallCheck(this, CarritoDTO);
  this.id = id;
  this.name = name;
  this.productos = productos;
});
exports["default"] = CarritoDTO;
function asDtoCarr(carrito) {
  if (Array.isArray(carrito)) return carrito.map(function (p) {
    return new ProductosDTO(c);
  });else return new ProductosDTO(carrito);
}