"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var src_1 = __importDefault(require("./src"));
src_1["default"].listen(3000, function (err) {
    if (!!err) {
        console.log("An error ocurred");
        console.error(err);
    }
    else {
        console.log("Server is running in http://localhost:3000");
    }
});
