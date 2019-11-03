const express  = require('express')
const database = require('./database')
const enroute  = require('./student.route')

const app = express()

// middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// routes
enroute(app)

app.listen(3000, ()=>{
    console.log("App running on port 3000")
    database.init()
})