module.exports = {
    init : ()=>{
        const mongoose = require('mongoose')
        mongoose.connect('url')
        .then(info=>console.log('Database Connected'))
    } 
}