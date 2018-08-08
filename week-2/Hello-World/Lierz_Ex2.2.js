/*
============================================
; Title:  Assignment 2.2
; Author: Professor Krasso 
; Date:   08 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates a basic usage
; of express.
;===========================================
*/ 


// create a require statement for express

var express = require('express');

// create a require statement for http, the library that allows
// us to start our Server

var http = require('http');

// create a placeholder for the express app

var app = express();

// tell the server to send back a response 'Hello World' when it receives a hit.

app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})

// Tell our server to create an listen on port 8080

http.createServer(app).listen(8080, function()
    {
        console.log('Application started on port %s', 8080);
    });


