const router=require("express").Router();
const controller=require("./controller");

router.post("/task",controller.getMath);

module.exports=router;