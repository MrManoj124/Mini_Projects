const express = require('express');
const router = express.Router()
const Department = require('../modules/Department')
const Employee = require('../modules/Employee')
//const {default:mongoose}=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Department.find().populate("_id")
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

router.get('emp/:did',async(req,res)=>{
    try{
        const did=req.params.did
        const results = await Employee.find(
            {Dept_id:did},
            {Dept_name:1,Dept_id, Emp_name:1}).populate("Dept_id").sort({Emp_name:-1})

        //manipulate the results
        const filterResult = results.map(emp=>({//emp is mapping name
            employee_id:emp._id,
            Employee_name:emp.Emp_name,
            department_name:emp.Dept_id.Dept_name
        }))
        if(results){
            res.status(200).json(filterResult)
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

//shows the employee count along with each department
router.get('/empcount/',async(req,res)=>{
    try{
        const results = await Department.aggregate([
            {
            $lookup:{
                from:"Employee",
                localField:"_id",
                foriegnField:"Dept_id",
                as:"emps"
            }
        },
        {
            $project:{
                Dept_name:1,
                //Location:1 not in my DB
                num_of_employees:{$size:"Emps"}
            }
        }
        ])

        if(results){
            res.status(200).json(results)
        }
        else
        {
            res.status(400).send("Sorry, No Data Found..!")
        }
    }
    catch(error)
    {
        console.error(error);
        res.status(500).send("Server Error..!")
    }
})


module.exports=router