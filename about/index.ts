import * as express from "express";
var app = express();

import {
  Context,
  ServiceContext,
  Server,
  Path,
  GET,
  PathParam,
  POST
} from "typescript-rest";

import * as multer from "multer";
var upload = multer();

@Path("/")
class AboutService {
  @GET
  getAbout(
    @Context
    context: ServiceContext
  ): void {
    console.log("req", context.request);
    console.log("res", context.response);
    context.response.write(
      "<h1><marquee direction=left>Hello from Express path `/about` on Now 2.0!</marquee></h1>"
    );
    context.response.write('<h2>Go to <a href="/">/</a></h2>');
    context.response.end();
  }

  @POST
  postAbout(
    @Context
    context: ServiceContext
  ) {
    console.log("req", context.request);
    console.log("req.body", context.request.body);
    console.log("res", context.response);
    context.response.send("Hello API Event Received");
  }
}

module.exports = app;
