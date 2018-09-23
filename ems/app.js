var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var csrf = require("csurf");

var csrfProtection = csrf({cookie: true});

var mongoose = require("mongoose");

var mongoDB = "mongodb://clierz:husker1ne@ds043388.mlab.com:43388/ems";

//mongoose connection
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

app.use(bodyParser.urlencoded({

    extended: true

}));

app.use(helmet.xssFilter());

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {

    var token = request.csrfToken();

    response.cookie('XSRF-TOKEN', token);

    response.locals.csrfToken = token;

    next();

});

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

app.get("/view", function(request, response){
    response.render('view', {
        message: 'Let\s View those Employees!'
    });
});

app.get("/list", function(req, res) {
    Employee.find({}, function(error, emps) {
        if(error) throw error;

        res.render("list", {
            title: "Employee List",
            employees: emps
        });
    });
});


var employee = new employee({
    name: "Caren Lierz"
})

app.post("/process", function(req, res) {
    if (!req.body.txtName) {
        res.status(400).send("Entries must have a name!");
        return;
    }

    let empName = req.body.txtName;
    console.log(empName);

    let emp = new Employee({
        name: empName
    });

    emp.save(function(error) {
        if(error) throw error;
        console.log(empName + " saved successfully!");
    });

    res.redirect("/list");
});



app.get("/view/:queryName", function(req, res) {
    let qn = req.params.queryName;
    Employee.find({ "name": qn }, function(error, emps) {
        if(error) throw error;
        console.log(emps);
        if(emps.length > 0) {
            res.render("view", {
                title: "Employee Record",
                employee: emps[0]
            });
        }
        else {
            res.redirect("/list");
        }
    });
});

//http server
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});