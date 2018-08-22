/*
============================================
; Title:  Assignment 4.3
; Author: Professor Krasso 
; Date:   22 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates using HTTP status codes
;===========================================
*/ 

// Require express
var express = require('express');

// create a require statement for the express application

var app = express();

// create a require statement for http

var http = require('http');

app.get("/not-found", function(request, response) {

    response.status(404);

    response.json({

        error: "Look's like you're lost!"

    })

});

app.get("/ok", function(request, response) {

    response.status(200);

    response.json({

        message: "All is good."

    })

});

app.get("/not-implemented", function(request, response) {

    response.status(501);

    response.json({

        error: "Looks like you need to build a page."

    })

});

http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080!");

});