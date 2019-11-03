module.exports = {
    init : ()=>{
        const mongoose = require('mongoose')
        mongoose.connect('mongodb+srv://mateh:ePngIs2AHiedGctf@cluster0-ydj76.mongodb.net/mp1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(info=>console.log('Database Connected'))
    }
}