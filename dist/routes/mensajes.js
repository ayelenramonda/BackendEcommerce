"use strict";

var _express = require("express");
var _mensajes = require("../controller/mensajes.js");
var router = (0, _express.Router)();
router.get('/', _mensajes.getAllControllerMsg);
router.post('/', _mensajes.saveMsgController);
module.exports = router;