/*
============================================
; Title:  Assignment 2.3
; Author: Professor Krasso 
; Date:   10 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates the use of routes in express
;===========================================
*/ 



// create a requrement statement for express

var express = require('express');

// create a requirement statement for http
var http = require('http');

// create an express application
var app = express();

// declare your routes

// route for home page
app.get('/', function(req, res){
    res.end('Welcome to the homepage.\n');

});

// route for about page
app.get('/about', function(req, res)
{
    res.end('Welcome to the about page.\n');
});

// route for contact page
app.get('/contact', function(req, res)
{
    res.end('Welcome to the contact page.\n')
});

// message for any other route that isn't already defined

app.use(function(req, res)
{
    res.statsCode = 404;
    res.end('404!\n');
});

// create our server on port 3000

http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000)
});
    