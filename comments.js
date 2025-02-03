// Create web server
// npm install express
// npm install body-parser
// npm install mongoose
// npm install ejs
// npm install express-sanitizer
// npm install method-override
// npm install nodemon
// npm install passport
// npm install passport-local
// npm install passport-local-mongoose
// npm install express-session

// App Config
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    ejs = require("ejs"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require("method-override"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    expressSession = require("express-session");

mongoose.connect("mongodb://localhost:27017/comments", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Model Config
var commentSchema = new mongoose.Schema({