const Student = require('./student.model')
module.exports = {
    get : (req, res)=>{
        res.json(await Student.find())
    },
    post : (req, res)=>{
        const student = new Student(req.body)
        student.save()
        .then(info=>res.json(info))
    },
    put : (req, res)=>{
        const { id } = req.body
        Student.updateOne({id}, req.body)
        .then(info=>res.json(info))
    },
    delete : (req, res)=>{
        const { id } = req.body
        Student.deleteOne({id})
        .then(info=>res.json(info))
    }
}