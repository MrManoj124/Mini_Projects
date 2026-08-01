const { Router } = require('express');
const mongoose = require('mongoose');
const ETFShema = new mongoose.Schema({
    _id:{type:Number,require:true},
    balance:{type:Number,require:true},
    interestRate:{type:Number}
})

const ETF = mongoose.model('ETFs',ETFShema)
const Emp = new ETF({
    _id:'IT001',
    balance:450000,
    interestRate:5
})
//Emp.save()
module.exports=ETF