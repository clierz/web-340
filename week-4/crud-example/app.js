/*
============================================
; Title:  Assignment 4.4
; Author: Professor Krasso 
; Date:   25 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates API calls.  In the examples below, I used Postman to invoke curl requests rather than a web browser. 
;===========================================
*/ 

// create a require statement for express
var express = require("express");

// create a require statement for http

var http = require("http");

// create a require statement for the app express
var app = express();

// create api calls for Get, PUT, POST, and Delete

app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

// create a require statement to start the server on port 8080

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});