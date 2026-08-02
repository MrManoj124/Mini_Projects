const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    _id:{type:String, require:true}, 
    empName:{type:String, require:true},
    empPosition:{type:String, require:true},
    empDOB:{type:Date},
    empGender:{type:String},
    prjId:[{
        type:String,
        require:true,
        ref:'projects'
    }],
    depId:{
        type:String,
        require:true,
        ref:'departments'
    }
})

const Employee = mongoose.model('employees', employeeSchema)
const Manoj = new Employee({ 
    _id:'IT01', 
    empName:'Manorooban',
    empDOB:'06-12-2002',
    empPosition:'SoftWare Engineer',
    empGender:'Male',
    prjId:['PRJ01', 'PRJ02'],
    depId:'DIT01'
})
Manoj.save()

module.exports = Employee