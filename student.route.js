const ctrl = require('./student.ctrl')

module.exports = (app)=>{

    app.route('/api')
        .get((req, res)=>res.send('api working'))

    app.route('/api/students')
        .get(ctrl.get)
        .post(ctrl.post)
        .put(ctrl.put)
        .delete(ctrl.delete)
}