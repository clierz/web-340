/*
============================================
; Title:  Assignment 4.2
; Author: Professor Krasso 
; Date:   20 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates using JSON API requests and responses
;===========================================
*/ 

// Require morgan
var logger = require('morgan');

// Require express
var express = require('express');

// create a require statement for the express application

var app = express();

// create a require statement for http

var http = require('http');

// create a get request and return some Json data
app.use(logger('dev'));

app.get('/customer/:id', function(req, res) {
    var id = parseInt(req.params.id, 10);
    res.json({
        firstName: 'Leo',
        lastName: 'Tolstoy',
        employeeId: id

    });
});

// Create your server

http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000");
 
});
