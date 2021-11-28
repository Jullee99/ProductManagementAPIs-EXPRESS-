const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/companyOfProduct",(req,res)=>{
    const pname = req.body.title;
    if(pname){
        return res.json({data:{
            company_id:"c1",
            name:"Puma",
            product_id:"p1"

        }});
    }
    return res.json({data:"No Data Found!!!"});
});

router.post("/addCompany",(req,res)=>{
    const {addcompnay} = req.body;
    if(addcompnay){
        return res.json({data:"Compnay Added Successfully!!!"});
    }
    return res.json({data:"Please Try Again!!! Company not added Successfully"});
})

router.put("/updateProductId",(req,res)=>{
    const cid = req.body.company_id;
    const pid = req.body.product_id;
    if(pid && cid) {
        return res.json({data:"product Id Update Successfully"});
    }
    return res.json({data:"Something happened Wrong"});
});

router.delete("/deleteCompany",(req,res)=>{
    const cid = req.body.company_id;
    if(cid){
        return res.json({data:"Company Deleted Successfully"});
    }
    return res.json({data:"Something happened Wrong"});
});

module.exports = router;
