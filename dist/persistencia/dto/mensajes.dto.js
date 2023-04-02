"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asDto = asDto;
exports["default"] = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var MensajesDTO = /*#__PURE__*/_createClass(function MensajesDTO(_ref) {
  var id = _ref.id,
    author = _ref.author,
    text = _ref.text;
  _classCallCheck(this, MensajesDTO);
  this.id = id;
  this.author = author;
  this.text = text;
});
exports["default"] = MensajesDTO;
function asDto(msg) {
  if (Array.isArray(msg)) return msg.map(function (p) {
    return new MensajesDTO(p);
  });else return new MensajesDTO(msg);
}