const express = require('express')
const router = express.Router()
const Department = require('../models/Department')
const {default: mongoose} = require('mongoose')
const Employee = require('../models/Employee')
//const {mongoose} = require('mongoose')

router.get('/', async (req,res)=>{
    try{
        const results = await Department.find().populate("_id")
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




//give a dept id and get the emplooyees who are working there
router.get('/emp/:did', async (req,res)=>{
    try{
        const did = req.params.did
        //const results = await Employee.find({depId:did}).populate("depID")
        //display only emp id, name, department name
        const results = await Employee.find(
            {depId:did},
            {depName:1, depId:1, empName:1}).populate("depId").sort({empName:-1}) //sorting according to ascending order
        
        //manipulate the results
        const filterResult = results.map(emp=>({ //emp is mapping name
            employee_id:emp._id,
            employee_name:emp.empName,
            department_name:emp.depId.depName
        }))

        if(results){
            res.status(200).json(filterResult)
        } else{
            res.status(404).send("Sorry, No Data Found !")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error !")
    }
})


//Try this in home
//find how many employees are working in a department

//Shows the employee count along with each department
router.get('/empcount/', async (req,res)=>{
    try{
        const results = await Department.aggregate([
            {
                $lookup:{
                    from: "employees",
                    localField:"_id",
                    foreignField:"depId",
                    as:"emps"
                }
            },
            {
                $project:{
                    depName:1,
                    //location:1, not in my DB
                    num_of_employees:{$size:"$emps"}
                }
            }
        ])
            

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



module.exports=router