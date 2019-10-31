const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    firstname : String,
    lastname  : String,
    major     : String,
    matricula : String,
})

module.exports = mongoose.model('Student', StudentSchema)