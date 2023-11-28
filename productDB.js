const connectDb=require('./db/connect');
const product = require('./models/product');

const Product=require('./models/product');

const product_json=require('./product.json')
 const start= async()=>{
try{
    await connectDb(process.env.connectDb);
    await product.create(product_json);
    console.log("success")
}catch(error){
console.log(error)
}

 }

start();