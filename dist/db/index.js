"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_firebase["default"].initializeApp(_config["default"]);

var _default = _firebase["default"].database();

exports["default"] = _default;