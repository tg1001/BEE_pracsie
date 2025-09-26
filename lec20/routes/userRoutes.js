const express=require("express");
const router=express.Router();
const {m5}=require("../Middleware/routerlevel");
router.use(m5)
router.post("/",(req,res)=>{
    res.json({
        success:"ok",
        message:"user added successfully"
    })
})
router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"all users data fetched successfully",
    })
})
router.get("/:id",(req,res)=>{
    res.json({
        success:true,
        message:"single user data fetched successfully",
    })
})
module.exports=router