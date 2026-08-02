const fs = require('fs');
fs.readFile('file.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
    }
    console.log(data)
});

console.log("File reading is done...")