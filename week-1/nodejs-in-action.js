/*
============================================
; Title:  Assignment 1.5
; Author: Professor Krasso 
; Date:   02 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates Node.js
;===========================================
*/ 

var header = require('../header.js');
console.log(header.display("Caren", "Lierz", "Exercise 1.5"));

// Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "I am the master of the universe";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var server = http.createServer(processRequest);

server.listen(8080);

