"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var PostController_1 = __importDefault(require("./controllers/PostController"));
var routes = express_1.Router();
routes.get("/post", PostController_1["default"].index); // Show all posts
routes.get("/post/:id", PostController_1["default"].show); // Show an specific post
routes.post("/post", PostController_1["default"].add); // Create an post
routes.put("/post/:id", PostController_1["default"].update); // Update an specific post
routes["delete"]("/post/:id", PostController_1["default"]["delete"]); // Delete an specific post
exports["default"] = routes;
