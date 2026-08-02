const fs = require('fs').promises;
const readFile = async()=>{
    try{
        //single processing
        const data = await fs.readFile('data.txt','utf8')
        console.log(data)
        console.log(data.value)
        console.log(data.status)

        //parellel processing
        const[data1,data2] = await Promise.all([
            fs.readFile('file.txt','utf8'),
            fs.readFile('data.txt','utf8')
        ])
        console.log(data1)
        console.log(data2)
    }

    catch(err){
        console.error(err);
    }
}

readFile()