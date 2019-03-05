const express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false, type: "form/multipart" }));
app.use(bodyParser.json());

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

app.post("*", function(req, res) {
  console.log("req", req);
  console.log("req.body", req.body);
  console.log("res", res);
  res.send("Hello API Event Received");
});

module.exports = app;
