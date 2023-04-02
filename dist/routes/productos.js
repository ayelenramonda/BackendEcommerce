"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productos = require("../controller/productos");
var router = (0, _express.Router)();
router.post('/add', _productos.saveController);
router.get('/list', _productos.getAllController);
router.get('/:id', _productos.getByIdC);
router["delete"]('/:id', _productos.deleteProductController);
var _default = router;
exports["default"] = _default;