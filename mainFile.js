const http=require('http');
const fs=require('fs');
const { parse } = require('path');
const PORT=8080;
const object={
    id:1,
    name:"Ayushi Gupta",
    company:"Gemini solutions",
    jsonData:"",

};
const server=http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile('text.json',"UTF-8",(err,data)=>{
           const parsedData=JSON.parse(data);
           console.log(parsedData);
           object.jsonData=parsedData;
           console.log(object);
           
           fs.writeFile('data.txt',JSON.stringify(object),"utf8",(err)=>{
            console.log(err);
            
            res.end(JSON.stringify(object));
            })
        })
        
        

    }
  
})
server.listen(PORT,()=>{
    console.log(`Listening to the port number ${PORT}`);
})


