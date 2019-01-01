/**
 * Module dependencies.
 */

var express = require("express");
var http = require("http");
var path = require("path");
var favicon = require("serve-favicon");
var morgan = require("morgan");

var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use(favicon(path.join(__dirname, "public", "ico", "favicon.ico")));
app.use(morgan("combined"));

app.use(function(req, res, next) {
  app.locals.pretty = true;
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("default");
});

app.get("/fluid", function(req, res) {
  res.render("layouts/fluid");
});

app.get("/hero", function(req, res) {
  res.render("layouts/hero");
});

app.get("/marketing", function(req, res) {
  res.render("layouts/marketing-alternate");
});

app.get("/narrow", function(req, res) {
  res.render("layouts/marketing-narrow");
});

app.get("/signin", function(req, res) {
  res.render("layouts/signin");
});

app.get("/starter", function(req, res) {
  res.render("layouts/starter-template");
});

app.get("/sticky", function(req, res) {
  res.render("layouts/sticky-footer");
});

http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
