const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')
const {default: mongoose} = require('mongoose')
//const {mongoose} = require('mongoose')

router.get('/', async (req,res)=>{
    try{
        const results = await Employee.find().populate("_id")
        if(results){
            res.status(200).json(results)
        } else{
            res.status(404).send("Sorry, No Data Found !")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error !")
    }
})


router.get('/procount/', async (req,res)=>{
    try{
        const results = await Employee.find()
        const newResults = results.map(emp=>({
            id:emp._id,
            name:emp.empName,
            num_of_projects:emp.prjId.length
        }))
        if(results){
            res.status(200).json(newResults)
        } else{
            res.status(404).send("Sorry, No Data Found !")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error !")
    }
})




//get project names along with employee details
//get the distinct positions of employees //distinct-get the unique position
//along with distinct positions, shoe how many employees hold that position
//like Engineers:2
//HR:1


module.exports=router