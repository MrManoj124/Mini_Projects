const express=require('express')
const router=express.Router()
const studentService=require('./studentservice')

router.get('/',(req,res)=>{
    const results = studentService.getstudents()
    if(results){
        res.status(200).json(results)
    } else{
        res.status(404).send("Sorry, No data found!")
    }
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = studentService.getStudents(id)
    if(results){
        res.status(200).json(results)
    } else{
        res.status(404).send("Sorry, No data found!")
    }
})

router.get('/gender/:gen',(req,res)=>{
    const gen = req.params.gen=='M'?'Male':'Female'
    const results = studentService.getByGender(gen)
    if(results){
        res.status(200).json(results)
    } else{
        res.status(404).send("Sorry, No data found!")
    }
})

module.exports=router;