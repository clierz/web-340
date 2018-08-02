/*
============================================
; Title:  Assignment 1.3
; Author: Professor Krasso 
; Date:   02 August 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates modules
;===========================================
*/ 



var header = require('../header.js');
console.log(header.display("Caren", "Lierz", "Exercise 1.4"));

var url = require('url');

var parsedURL = url.parse('https://www.example.com/profile?name=smith');

// adding a space below the header

console.log("");

// call the console.log and have it return the various parts of the URL

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);