"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ratePost = exports.getAllPosts = exports.createNewPost = void 0;

var _db = _interopRequireDefault(require("../../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Creates new post
var createNewPost = function createNewPost(post) {
  return new Promise(function (resolve, reject) {
    _db["default"].ref('/posts').push({
      message: post.message,
      author: post.author,
      creationDate: new Date().toString(),
      rates: 0
    }).then(function () {
      return resolve();
    })["catch"](function () {
      return reject();
    });
  });
}; //Get all posts inside db


exports.createNewPost = createNewPost;

var getAllPosts = function getAllPosts() {
  return new Promise(function (resolve) {
    _db["default"].ref('/posts/').once('value', function (snap) {
      return resolve(snap.val());
    });
  });
}; //Find post and update him


exports.getAllPosts = getAllPosts;

var ratePost = function ratePost(postId) {
  return new Promise(function (resolve, reject) {
    getPostById(postId).then(function (res) {
      _db["default"].ref("/posts/".concat(postId)).update({
        rates: 1 + res.rates
      }).then(function () {
        return resolve();
      })["catch"](function () {
        return reject();
      });
    })["catch"](function () {
      return reject();
    });
  });
}; //Find post by id


exports.ratePost = ratePost;

var getPostById = function getPostById(postId) {
  return new Promise(function (resolve, reject) {
    _db["default"].ref("/posts/".concat(postId)).once('value', function (snap) {
      return resolve(snap.val());
    })["catch"](function () {
      return reject();
    });
  });
};