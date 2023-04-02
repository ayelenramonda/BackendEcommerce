"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _carrito = require("../controller/carrito.js");
var routes = (0, _express.Router)();
routes.get('/:id', _carrito.getByIdC);
routes.get('/', _carrito.listarAll);
routes.get('/:id/productos', _carrito.listarProd);
routes.get('/compra/:id', _carrito.finalizarCompra);
routes.post('/', _carrito.crearcarritoController);
routes.post('/:id/productos/:idPrd', _carrito.guardarProductoEncarr);
routes["delete"]('/:id', _carrito.BorrarCarritoController);
routes["delete"]('/:id/productos/:idPrd', _carrito.borrarOneProducto);
var _default = routes;
exports["default"] = _default;