var express = require("express");
var app = express();
var ejs = require("ejs");

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/love/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love", {thing: thing});
});

app.get("/Posts", function(req, res) {
  var posts = [
    {title: "Post 1", author: "Peter"},
    {title: "Why JavaScript is AWESOME!", author: "Scott"},
    {title: "The secret behind Python web templating", author: "DJ"},
    {title: "UI / UX Secrets of the Trade", author: "Frank V."}
  ];
  res.render("posts", {posts: posts})
});

app.listen(3000, function() {
  console.log("Connected...");
});
