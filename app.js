console.log("Library App Port No. :- 9999");

const express = require("express");
const app = new express();
const port = process.env.PORT || 9999;

// declare nav-array globally
const nav = [
    {
        link : "/home",
        name : "Home"
    },
    {
        link : "/books",
        name : "Books"
    },
    {
        link : "/authors",
        name : "Authors"
    },
    {
        link : "/admin/addbook",
        name : "AddBook"
    },
    {
        link : "/admin/addauthor",
        name : "AddAuthor"
    },
    {
        link : "/signup",
        name : "SignUp/LogIn"
    },
    {
        link : "/",
        name : "LogOut"
    }
]

// imports Routers
const booksRouter = require("./src/routes/booksRouter")(nav);
const authorsRouter = require("./src/routes/authorsRouter")(nav);
const signupRouter = require("./src/routes/signupRouter")(nav);
const loginRouter = require("./src/routes/loginRouter")(nav);
const adminRouter = require("./src/routes/adminRouter")(nav);

// static files
app.use(express.static("./public"));
// ejs template engine
app.set("view engine","ejs");
// set initial path
app.set("views","./src/views");
// router
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/signup",signupRouter);
app.use("/login",loginRouter);
app.use("/admin",adminRouter);

// review array
const reviews = [
    {
        reader : "Manohar Varma",
        rating : "Good",
        img : "readr1.jpeg",
        time : "- 3 hours ago",
        about : "Exactly what I wanted, and then some. This app provides a tool to store a list of all your book, comics and computer games."
    },
    {
        reader : "Ravindra Nadh",
        rating : "Excellent",
        img : "readr2.jpeg",
        time : "- Yesterday",
        about : "This app has finally helped us catalog our large and disarrayed library and to keep track of the books we have out on loan."
    },
    {
        reader : "Shalini Das",
        rating : "Satisfactory",
        img : "readr3.jpeg",
        time : "- Just now",
        about : "I get the comment section is designed for added things, but its not an organized system. Adding a small spot for checking if its signed or not would be nice."
    }
]

// library page
app.get("/",(req,res)=>{
    res.render("index",
    {
        nav,
        title : "Library App",
        reviews
    });
});

// home page
app.get("/home",(req,res)=>{
    res.render("home",{
        nav,
        title : "Library",
        reviews
    });
});

// server port
app.listen(port,()=>{
    console.log("Server is ready at " + port);
});
