"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDb = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _index = _interopRequireDefault(require("../config/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var initDb = function initDb() {
  return _mongoose["default"].connect(_index["default"].MONGO_ATLAS);
};
exports.initDb = initDb;