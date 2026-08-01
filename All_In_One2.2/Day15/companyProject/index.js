const express=require('express');
const app = express();
const  port = 3001;
const mongoose= require('mongoose');
const projectsert = require("./routes/projectRoute")
const Employeesert = require("./routes/EmployeeRoute")
const ETFsert=require("./routes/ETFRoute")
const Departmentsert=require("./routes/departmentRoute")

app.use(express.json())
app.use('/project',projectsert)
app.use('/Employee',Employeesert)
app.use('/Department',Departmentsert)
app.use('/ETF',ETFsert)
mongoose.connect('mongodb://localhost:27017/Company').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})