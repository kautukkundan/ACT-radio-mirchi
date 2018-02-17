var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("login");
});

var port = process.env.PORT || 4000;
var server = app.listen(port, function () {
	console.log('listening to request on port 4000')
});