const express = require('express');
const router = express.Router()
const Project = require('../modules/project')
const {default:mongoose}=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Project.find().populate("_id")
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



module.exports=router