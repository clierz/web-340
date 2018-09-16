/*
============================================
; Title:  Assignment 7.3
; Author: Professor Krasso 
; Date:   16 September 2018
; Modified By: Caren Lierz
; Description: This is some code that demonstrates unit testing
;===========================================
*/ 


//Unit Test

var fruits = require("../Lierz-fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});