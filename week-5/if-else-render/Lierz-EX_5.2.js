/*
============================================
; Title:  Assignment 5.2
; Author: Professor Krasso 
; Date:   28 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates using EJS for HTML
;===========================================
*/ 

// Create a require statement for express
var express = require("express");

// create a require statement for http
var http = require("http");

// create a require statementt for the path
var path = require("path");

// tell the application to use express

var app = express();

// tell hte application to use the views directory
app.set("views", path.resolve(__dirname, "views"));

// tell the application to use an ejs file
app.set("view engine", "ejs");

// create a variable called f and put 4 things in it.  

//var f = [

//  "Apple",

//  "Blueberry",

//  "Orange",

// "Strawberry"

//];

// replace the list of fruits with a list of names array

var names = [
    "Caren",
    "Maya",
    "Harper",
    "Laura"
];


// tell your application that when the page loads to load everything under the variable f
app.get("/", function(request, response) {

    response.render('index', {

        names: names

    });

});

// create your server and tell it to listen on port 8080

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});