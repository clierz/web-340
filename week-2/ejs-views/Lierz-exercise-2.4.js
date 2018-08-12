/*
============================================
; Title:  Assignment 2.4
; Author: Professor Krasso 
; Date:   10 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates the use of ejs in express
;===========================================
*/ 

// create a requrements statement for http

var http = require("http");

// create a requirements statement for express

var express = require("express");

// create a requirement statement for the path

var path = require("path");

// create an application for express

var app = express();

// tell express the views are in the views directory
app.set("views",path.resolve(__dirname, "views"));

// tell express to use the EJS view engine

app.set("view engine","ejs");

app.get("/", function(request,response){
    response.render("index",{
        message: "Welcome to Caren Lierz's Homepage!",
        firstName: "Caren",
        lastName: "Lierz",
        address: "La Vista, Nebraska",
    });

});

// create your server and tell it to listen on port 8080

http.createServer(app).listen(8080,function(){
    console.log("EJS-Views app started on port 8080.");

});

