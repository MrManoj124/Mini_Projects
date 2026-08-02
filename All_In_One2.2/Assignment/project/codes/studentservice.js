const students = require('./studentdb')

function getstudents(){
    return students;
}

function getStudents(id){
    return students.find((student)=>student.regno==id)
}

function getByGender(gen){
    return students.filter((student)=>student.gender==gen)
}

module.exports={getStudents,getstudents,getByGender};