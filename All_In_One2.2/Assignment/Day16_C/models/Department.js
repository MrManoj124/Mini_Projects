const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    _id:{type:String, require:true}, 
    depName:{type:String},
    empId:{
        type:String,
        require:true,
        ref:'employees'
    }
})

const Department = mongoose.model('departments', departmentSchema)
const IT = new Department({ 
    _id:'DIT01', 
    depName:'Information Technology'
})
//IT.save()

module.exports = Department