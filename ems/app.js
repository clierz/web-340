var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var helmet = require("helmet");

var mongoose = require("mongoose");

var mongoDB = "mongodb://clierz:husker1ne@ds043388.mlab.com:43388/ems";

mongoose.connect(mongoDB,{
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});

var employee = require("./models/employee");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.use(helmet.xssFilter());

app.get("/", function(request, response){
    response.render('index', {
        message: 'xss Prevention Example'
    });
});

app.get("/New", function(request, response){
    response.render('new', {
        message: 'Let\s Add that New Employee!'
    });
});

var employee = new employee({
    name: "Caren Lierz"
})

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});