const mongoose=require('mongoose')
const courseSchema= new mongoose.Schema({
    code:{type:String},
    name:{type:String},
    credits:{type:Number},
    description:{type:String}
})

const Course=mongoose.model('courses',courseSchema)
const webservice= new Course({
    code:'IT2234',
    name:'Practical for WebService',
    credits:3,
    description:'Build a REST API with Node.js technology'
})
webservice.save()
module.exports=Course