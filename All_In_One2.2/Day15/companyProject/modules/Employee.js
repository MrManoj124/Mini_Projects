const { Router } = require('express');
const mongoose = require('mongoose');
const EmployeeShema = new mongoose.Schema({
    _id:{type:String,require:true},
    E_name:{type:String,require:true},
    Age:{type:Number,require:true},
    Emp_DOB:{type:Date},
    Emp_Gender:{type:String},
    Address:{type:String,require:true},
    pid:[{type:String,require:true,ref:'Project'}],
    Dept_id:{
        type:String,require:true,ref:'Department'
    }
})

const employee = mongoose.model('Employee',EmployeeShema)
const Employee = new employee({
    _id:'It001',
    E_name:'Manorooban',
    Age:23,
    Emp_DOB:'12-06-2002',
    Emp_Gender:'Male',
    Address:'New Katpagapuram',
    pid:['Pr0012','Pr0014'],
    Dept_id:'Id13'
})
Employee.save()
module.exports=employee