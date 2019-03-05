const express = require("express");
const app = express();

app.get("*", (req, res) => {
  console.log("req", req);
  console.log("res", res);
  res.write(
    "<h1><marquee direction=left>Hello from Express path `/about` on Now 2.0!</marquee></h1>"
  );
  res.write('<h2>Go to <a href="/">/</a></h2>');
  res.write("req", req);
  res.end();
});

module.exports = app;
