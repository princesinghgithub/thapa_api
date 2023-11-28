const { query } = require("express")

const getallProduct= async(req,res)=>{
    console.log(req,query);
res.status(200).json({msg:"i am getallproduct"})
}

const getallProductTesting= async(req,res)=>{
res.status(200).json({msg:"i am getallproductTeting"})
}
module.exports={getallProduct,getallProductTesting}