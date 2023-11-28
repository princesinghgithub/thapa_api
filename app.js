require('dotenv').config();
const express=require('express');
 const app=express();
const connectDb=require('./db/connect');
 const PORT=process.env.PORT ||3000

 app.get("",(req,res)=>{
res.send(" this is my first niodejs api project");
 })

 const start= async()=>{
    try{
        await connectDb()
app.listen(PORT,()=>{
    console.log(`${PORT} i am conencted`)
})
    }catch (error){
        console.log(error);
    }
 }
 start();