"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asDto = asDto;
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var ProductosDTO = /*#__PURE__*/_createClass(function ProductosDTO(_ref) {
  var id = _ref.id,
    title = _ref.title,
    price = _ref.price,
    stock = _ref.stock;
  _classCallCheck(this, ProductosDTO);
  this.id = id;
  this.title = title;
  this.price = price;
  this.stock = stock;
});
exports["default"] = ProductosDTO;
function asDto(prod) {
  if (Array.isArray(prod)) return prod.map(function (p) {
    return new ProductosDTO(p);
  });else return new ProductosDTO(prod);
}