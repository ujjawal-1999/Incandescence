const mongoose = require('mongoose')
const validator = require('validator')


var ParticipantSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message:'{VALUE} is not a valid email'
        }

    },
    name: {
        type: String,
        require: true,
        minlength: 1
    },
    institute: {
        type: String,
        require: true,
        minlength: 1
    },
    phonenumber: {
        type: String,
        require: true,
        minlength: 10
    },
    id: {
        type: String,
        require: true
    },event : {
        type: String,
        require : true
    }
})

var Participant = mongoose.model('Participant',ParticipantSchema)
module.exports = {Participant}