const express = require("express");
const router = express.Router();
router.use(express.json());


router.get("/productOfCompany",(req,res)=>{
   const cid = req.body.company_id;
   if(cid){
       return res.json({data:{
           product_id:"p1",
           title:"Oxford shoe",
           price:"5000",
           category:"Shoes",
           company_id:"c1",
           seller_id:"s1"
       }
    });
   }
   res.json({data:"No Data Found"});
});

router.get("/productOfSeller",(req,res)=>{
    const sid = req.body.seller_id;
    if(sid){
        return res.json({data:{
           product_id:"p1",
           title:"Oxford shoe",
           price:"5000",
           category:"Shoes",
           company_id:"c1",
           seller_id:"s1"
        }});
    }
    return res.json({data:"No Data Found"});
});

router.post("/addProduct",(req,res)=>{
    const {addProduct} = req.body;

    if(addProduct){
        return res.json({data:"Product Added Successfully"});
    }
    return res.json({data:"Something happened Wrong"});
})

router.put("/updateProductCategory",(req,res)=>{
    const pid = req.body.product_id;
    const c = req.body.category;
    if(pid && c){
        return res.json({data:"Product Category Updated Successfully"});
    }
    return res.json({data:"Something happened Wrong"});
})

router.delete("/deleteProduct",(req,res)=>{
    const pid = req.body.product_id;
    if(pid){
        return res.json({data:"Product Deleted Successfully"});
    }
    return res.json({data:"Something happened wrong"});
})
module.exports = router;