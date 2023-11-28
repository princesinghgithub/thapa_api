
const mongoose= require('mongoose');
 
const url= "mongodb://127.0.0.1:27017/E-cloth";

const connectDb= async()=>{
    console.log("connect data")
  return  mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
}
module.exports=connectDb;