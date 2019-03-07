// import * as express from "express";
// const app = express();

// app.get("*", (req, res) => {
//   res.write(
//     "<h1><marquee direction=right>Hello from Express path `/` on Now 2.0!</marquee></h1>"
//   );
//   res.write('<h2>Go to <a href="/about">/about</a></h2>');
//   res.end();
// });

import * as express from "express";

import {
  Context,
  ServiceContext,
  Server,
  Path,
  GET,
  PathParam,
  FileParam,
  FilesParam,
  POST
} from "typescript-rest";

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
      "<h1><marquee direction=left>Hellos-get from Express path `/about` on Now 2.0!</marquee></h1>"
    );
    context.response.write('<h2>Go to <a href="/">/</a></h2>');
    context.response.end();
  }

  @POST
  postAbout(
    @Context
    context: ServiceContext,
    @FilesParam("json") file: Express.Multer.File
  ) {
    console.log("GREGGGGG");
    console.log("req", context.request);
    console.log("req.body", context.request.body);
    console.log("file", file);
    console.log("res", context.response);
    context.response.send("Hello API Event Received");
  }
}

let app: express.Application = express();
Server.buildServices(app);

module.exports = app;
