require('./db');
const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(v) {
            if(!validator.isEmail(v)) {
                throw new Error('email is invalid')
            }
        }
    },
    password : {
        type : String,
        required: true
    }
})

const User = new mongoose.model('User', userSchema);

//all methods related to database 

module.exports = User;