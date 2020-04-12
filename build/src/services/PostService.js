"use strict";
exports.__esModule = true;
var PostService = /** @class */ (function () {
    function PostService() {
        this.nextId = 1;
        this.list = [];
    }
    PostService.prototype.index = function () {
        return this.list;
    };
    PostService.prototype.add = function (newPost) {
        newPost.id = this.nextId++;
        this.list.push(newPost);
        return newPost;
    };
    PostService.prototype.update = function (post, id) {
        var postFind = this.list.find(function (p) { return p.id === id; });
        postFind.description = post.description;
        postFind.name = post.name;
        postFind.title = post.title;
        return postFind;
    };
    PostService.prototype.show = function (id) {
        return this.list.find(function (p) { return p.id === id; });
    };
    PostService.prototype["delete"] = function (id) {
        this.list = this.list.filter(function (p) { return p.id !== id; });
    };
    return PostService;
}());
exports["default"] = new PostService();
