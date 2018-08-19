/*
============================================
; Title:  Assignment 3.4
; Author: Professor Krasso 
; Date:   19 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates advanced routing and logging
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

app.use(logger('short'));

app.get("/", function(request, response){
    response.render('index', {
        message: 'home page'
    });
});


app.get('/about', function(request, response){
    response.render('about', {
        message: 'about page'
    });
});

app.get('/contact', function(request, response){
    response.render('contact', {
        message: 'contact page'
    });
});

app.get('/products', function(request, response){
    response.render('products', {
        message: 'products page'
    });
});


// create your server and tell it to listen on port 8080

http.createServer(app).listen(3001, function() {

    console.log("Application started on port 3001");
 
});


