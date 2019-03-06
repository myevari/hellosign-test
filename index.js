"use strict";
// import * as express from "express";
// const app = express();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.get("*", (req, res) => {
//   res.write(
//     "<h1><marquee direction=right>Hello from Express path `/` on Now 2.0!</marquee></h1>"
//   );
//   res.write('<h2>Go to <a href="/about">/about</a></h2>');
//   res.end();
// });
var express = require("express");
var typescript_rest_1 = require("typescript-rest");
var AboutService = /** @class */ (function () {
    function AboutService() {
    }
    AboutService.prototype.getAbout = function (context) {
        console.log("req", context.request);
        console.log("res", context.response);
        context.response.write("<h1><marquee direction=left>Hellos-get from Express path `/about` on Now 2.0!</marquee></h1>");
        context.response.write('<h2>Go to <a href="/">/</a></h2>');
        context.response.end();
    };
    AboutService.prototype.postAbout = function (context) {
        console.log("GREGGGGG");
        console.log("req", context.request);
        console.log("req.body", context.request.body);
        console.log("res", context.response);
        context.response.send("Hello API Event Received");
    };
    __decorate([
        typescript_rest_1.GET,
        __param(0, typescript_rest_1.Context),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typescript_rest_1.ServiceContext]),
        __metadata("design:returntype", void 0)
    ], AboutService.prototype, "getAbout", null);
    __decorate([
        typescript_rest_1.POST,
        __param(0, typescript_rest_1.Context),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typescript_rest_1.ServiceContext]),
        __metadata("design:returntype", void 0)
    ], AboutService.prototype, "postAbout", null);
    AboutService = __decorate([
        typescript_rest_1.Path("/")
    ], AboutService);
    return AboutService;
}());
var app = express();
typescript_rest_1.Server.buildServices(app);
module.exports = app;
