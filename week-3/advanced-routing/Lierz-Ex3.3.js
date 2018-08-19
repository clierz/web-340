/*
============================================
; Title:  Assignment 3.3
; Author: Professor Krasso 
; Date:   08 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates advanced routing
;===========================================
*/ 

// create a require statement for express

var express = require('express');

// create a require statement for http

var http = require('http');

// create a require statement for a path

var path = require('path');

// create a require statement for morgan logging

var logger = require('morgan');

// create a require statement for the express application

var app = express();

// tell express the apps are in the views directory

app.set('views', path.resolve(__dirname,'views'));

// tell express to use the ejs views engine

app.set('view engine','ejs');

// add the logger

app.use(logger('short'));

app.get('/:employeeId', function(request, response) {

    var employeeId = parseInt(request.params.employeeId, 10);

     response.render('index', {

        employeeId: employeeId

    })

});

// create your server and tell it to listen on port 8080

 http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080");

});
