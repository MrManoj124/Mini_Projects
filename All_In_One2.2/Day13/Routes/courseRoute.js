const express = require('express')
const router = express.Router()
const Course = require('../modules/course')

router.get('/',async(req,res)=>{
    try{
        const results = await course.find()
        if(results)
        {
            res.status(200).json(results)
        }
        else
        {
            res.status(404).send("Sorry, no data found..!")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const results = await course.findById(id)
        if(results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.get('/code/:cid',async(req,res)=>{
    try{
        const cid=req.params.cid
        const results = await course.find({code:cid})
        const count = results.length
        console.log(count)
        if(results)
        {
            if(count>0)
            {
                res.status(200).json(results)
            }
            else{
                res.status(404).send("Sorry, no data found!")
            }
        }
        else
        {
            res.status(404).send("Sorry, no data found!")
        }

    }
    catch(error)
    {
        console.error(error);
        res.status(500).send("Server error!")
    }
})

module.exports=router