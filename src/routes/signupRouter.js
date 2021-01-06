const express = require("express");
// router
const signupRouter = express.Router();

// router function
function router(nav){
    
    // books page
    signupRouter.get("/",(req,res)=>{
        res.render("signup",
        {
            nav,
            title : "SignUp",
        });
    });

    return signupRouter;
}

// router function call
module.exports = router;