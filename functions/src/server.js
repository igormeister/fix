const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();

app.use(cors({origin:true}))
    .use(bodyParser.json())
    .use("/math",require("./lib/math/route"))
    .get('*',(_,res)=>res.status(404)
        .json({success:false,data:"Endpoint noy found"}));
module.exports=app;