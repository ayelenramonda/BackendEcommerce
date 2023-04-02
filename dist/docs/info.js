"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.info = void 0;
var info = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Productos',
      version: '1.0.0',
      description: 'API para hacer compras con carrito'
    },
    servers: [{
      url: 'http://localhost:8080'
    }
    // {
    //     url: 'https://railway.app/myapp'
    // }
    ]
  },

  apis: ['./src/docs/*.yml']
};
exports.info = info;