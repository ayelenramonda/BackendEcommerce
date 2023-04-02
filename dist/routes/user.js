"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _passport = _interopRequireDefault(require("passport"));
var _user = require("../controller/user.js");
var _auth = require("../middleweare/auth.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
var passportOptions = {
  badRequestMessage: 'falta usuario/pass'
};
router.post('/login', _passport["default"].authenticate('login', passportOptions), _user.login);
router.post("/signup", _user.signUp);
router.get('/home', _auth.isLoggedIn, _user.getHome);
router.post("/logout", _auth.isLoggedIn, _user.logout);
var _default = router;
exports["default"] = _default;