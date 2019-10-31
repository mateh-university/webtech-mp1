const ctrl = require('./student.ctrl')

module.exports = (app)=>{
    app.route('api/students')
        .get(ctrl.get)
        .post(ctrl.post)
        .put(ctrl.put)
        .delete(ctrl.delete)
}