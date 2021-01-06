const express = require("express");
// router
const adminRouter = express.Router();

// router function
function router(nav){

    // add book form page
    adminRouter.get("/addbook",(req,res)=>{
        res.render("addBook",{
            nav,
            title : "Add a Book"
        });
    });

    // add author form page
    adminRouter.get("/addauthor",(req,res)=>{
        res.render("addAuthor",{
            nav,
            title : "Add an Author"
        });
    });

    // add book/author to library
    adminRouter.get("/add",(req,res)=>{
        res.send("I am added");
    });

    return adminRouter;
}

// router function call
module.exports = router;