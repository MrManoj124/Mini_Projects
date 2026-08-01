const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    code:{type:String},
    name:{type:String},
    credits:{type:Number},
    description:{type:String}
})

const Course = mongoose.model('courses',courseSchema)
const webservice = new Course({
    code:'FasIT2134',
    name:'Practical for web services',
    credits:3,
    description:'build a Rest API with Node.js Technology'
})

webservice.save()
module.exports=Course