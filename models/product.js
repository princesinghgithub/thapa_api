const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:[true,"fild required must"]
    },
    // featured:{
    //     true:Boolean,
    //     default:true
    // },
    // reating:{
    //     type:Number,
    //     default:4.9
    // },
    // createdAt:{
    //     type:Date,
    //     default:Date.now()
    // },
    // company:{
    //     type:String,
    //     enum:{
    //         value:["apple","samsung","nokia","dell","mi"],
    //         message:`{VALUE} is not supported`
    //     }
    // }

})

module.exports=mongoose.model('Product',productSchema);