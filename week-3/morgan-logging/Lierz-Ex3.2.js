/*
============================================
; Title:  Assignment 3.2
; Author: Professor Krasso 
; Date:   16 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates a basic usage
; error logging using morgan
;===========================================
*/ 

var express = require('express');

var http = require('http');

var path = require('path');

var logger = require('morgan');

var app = express();

// tell Express the views are in the 'views' directory
app.set('views', path.resolve(__dirname, 'views'));

//tell Express to use the EJS view engine

app.set('view engine', 'ejs');

// add the logger
app.use(logger('short'));

// create a get request and return a response
app.get('/', function(request, response){
    response.render('index',{
        message: 'Welcome to the Morgan Logger Example. This is the Best Way to Log Your Errors!'
    });
});

// create a server on port 8080 and tell your application to listen for it. 
http.createServer(app).listen(8080, function() {

    console.log('Application started on port 8080');

});