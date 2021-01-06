const express = require("express");
// router
const loginRouter = express.Router();

// router function
function router(nav){

    // books page
    loginRouter.get("/",(req,res)=>{
        res.render("login",
        {
            nav,
            title : "LogIn",
        });
    });

    return loginRouter;
}

// router function call
module.exports = router;