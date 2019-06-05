"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _services = require("../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); //ROUTER CONFIG


router.use(_express["default"].json({
  type: '*/*'
})); //ROUTES

router.post('/posts/', function (req, res) {
  (0, _services.createNewPost)(req.body).then(function (result) {
    return res.status(200).send({
      post: req.body,
      result: result
    });
  })["catch"](function () {
    return res.status(200).send({
      success: false
    });
  });
});
router.get('/posts/', function (req, res) {
  (0, _services.getAllPosts)().then(function (value) {
    var data = Object.keys(value).map(function (e) {
      return {
        id: e,
        post: value[e]
      };
    });
    res.status(200).send(data.sort(function (a, b) {
      return a.creationDate > b.creationDate ? -1 : 1;
    }));
  });
});
router.post('/posts/rate', function (req, res) {
  (0, _services.ratePost)(req.query.id).then(function () {
    return res.status(200).send({
      success: true
    });
  })["catch"](function () {
    return res.status(200).send({
      success: false
    });
  });
});
var _default = router;
exports["default"] = _default;