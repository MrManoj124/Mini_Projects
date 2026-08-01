//const { Router } = require('express');
const mongoose = require('mongoose');
const DepartmentSchema = new mongoose.Schema({
    _id:{type:String,require:true},
    Dept_name:{type:String,require:true},
    Emp_Id:{type:String,require:true,ref:'Employee'}
})

const Department = mongoose.model('Department',DepartmentSchema)
const Departments= new Department({
    _id:'Id12',
    Dept_name:'Website Deisign',
})
//Departments.save()
module.exports=Department