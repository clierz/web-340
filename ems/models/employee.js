// require statements

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the employeeSchema

var employeeSchema = new Schema({

    name: String

});

// define the employee model

var employee = mongoose.model("ems", employeeSchema);

module.exports = employee;

