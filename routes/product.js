const express=require('express');
const router=express.Router();
const {getallProduct,getallProductTesting}= require('../controller/product')
router.route('/').get(getallProduct);
router.route("/testing").get(getallProductTesting);

module.exports=router;