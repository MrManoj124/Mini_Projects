const express = require('express');
const router = express.Router()
const Employee = require('../modules/Employee')
const {default:mongoose}=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Employee.find().populate("_id")
        if(results){
            res.status(200).json(results)
        }
        else
        {
            res.status(404).send('Sorry, No Data found .. !')
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error..!")
    }
})

router.get('/procount/',async (req,res)=>{
    try{
        const results =await Employee.find()
        const newResults=results.map(emp=>({
            id:emp,_id,
            name:emp.Emp_name,
            num_of_projects:emp.pid.length
        }))
        if(results)
        {
            res.status(200).json(newResults)
        }
        else{
            res.status(404).send("Sorry, No Data Found ..!")
        }
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send("Server Error!")
    }
})


module.exports=router