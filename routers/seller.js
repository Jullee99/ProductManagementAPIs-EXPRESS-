const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/sellerOfProduct",(req,res)=>{
    const pname = req.body.title;
    if(pname){
        return res.json({data:{
            seller_id : "s1",
            name : "Oxford_Saller",
            product_id : "p1"
        }});
    }
    return res.json({data:"No Data Found"});
});

router.post("/addSeller",(req,res)=>{
    const {addSeller} = req.body;

    if(addSeller){
        return res.json({data:"Seller Added Successfully!!"});
    }
    return res.json({data:"Somthing happened Wrong"});
});

router.put("/updateProductId",(req,res)=>{
    const sid = req.body.seller_id;
    const pid = req.body.product_id;
    if(pid && sid){
        return res.json({data:"Product_ID Updated Successfully!!"});
    }
    return res.json({data:"Somthing happened Wrong"});
});

router.delete("/deleteSeller",(req,res)=>{
    const sid = req.body.seller_id;
    if(sid){
        return res.json({data:"Seller Deleted Successfully!!"});
    }
    return res.json({data:"Somthing happened Wrong"});
});
module.exports = router;