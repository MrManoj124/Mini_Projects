const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    _id:{type:String, require:true}, 
    prjName:{type:String},
    empId:{
        type:String,
        require:true,
        ref:'employees'
    }
})

const Project = mongoose.model('projects', projectSchema)
const prj01 = new Project({ 
    _id:'PRJ01', 
    prjName:'Database Management',
    empId:'IT01'
})
//prj01.save()

module.exports = Project