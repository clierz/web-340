/*
============================================
; Title:  Assignment 6.2
; Author: Professor Krasso 
; Date:   05 September 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates connecting to the mongoose database 
;===========================================
*/ 



var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://clierz:husker1ne@ds043388.mlab.com:43388/ems';


mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promose = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Application connected to mLab');
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function () {
    console.log('Application started and listening on port 5000');
});