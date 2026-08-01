const { Router } = require('express');
const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    _id:{type:Number,require:true},
    name:{type:String,require:true},
    empId:{
        type:String,
        require:true,
        ref:'employees'
    }
})

const project = mongoose.model('project',projectSchema)
const website = new project({
    _id:'Pr001',
    name:'Website Designing',
    empId:'It001'
})
//website.save()
module.exports=project