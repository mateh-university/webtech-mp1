const Student = require('./student.model')
module.exports = {
    get : async (req, res)=>{
        res.json(await Student.find())
    },
    post : (req, res)=>{
        const student = new Student(req.body)
        student.save()
        .then(info=>res.json(info))
    },
    put : (req, res)=>{
        const { id } = req.body
        Student.updateOne({_id : id}, req.body)
        .then(info=>res.json(info))
    },
    delete : (req, res)=>{
        const { id } = req.body
        Student.deleteOne({_id: id})
        .then(info=>res.json(info))
    }
}