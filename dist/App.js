"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./server/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 8080;
var HOST = '0.0.0.0';
app.use(_routes["default"]);
app.listen(PORT);
console.log("Server loaded on port ".concat(PORT, " and host ").concat(HOST, "!!!"));
var _default = app;
exports["default"] = _default;