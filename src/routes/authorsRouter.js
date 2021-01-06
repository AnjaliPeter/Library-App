const express = require("express");
// router
const authorsRouter = express.Router();

// router function
function router(nav){

    // authors array
    var authors = [
        {
            author : "Roberto Bolano",
            book : "2666",
            genre : "Novel",
            img : "auth1.jpeg",
            about : "Roberto Bolano, in full Roberto Bolaño Ávalos, (born April 28, 1953, Santiago, Chile—died July 15, 2003, Barcelona, Spain), Chilean author who was one of the leading South American literary figures at the turn of the 21st century.His worldwide literary reputation was made with the posthumous publication of his magnum opus, 2666 (2004)."
        },
        {
            author : "Bell Hooks",
            book : "All About Love",
            genre : "Creative nonfiction",
            img : "auth2.jpeg",
            about : "Bell hooks, pseudonym of Gloria Jean Watkins, (born September 25, 1952, Hopkinsville, Kentucky, U.S.), American scholar and activist whose work examined the connections between race, gender, and class. She often explored the varied perceptions of Black women and Black women writers and the development of feminist identities."
        },
        {
            author : "Edward Abbey",
            book : "Desert Solitaire",
            genre : "Autobiography",
            img : "auth3.jpeg",
            about : "Edward Abbey, (born January 29, 1927, Indiana, Pennsylvania, U.S.—died March 14, 1989, near Tucson [now in Tucson], Arizona), American writer whose works, set primarily in the southwestern United States, reflect an uncompromising environmentalist philosophy.His book Desert Solitaire (1968), is considered by many to be his best."
        }
    ]

    // authors page
    authorsRouter.get("/",(req,res)=>{
        res.render("authors",{
            nav,
            title : "Authors",
            authors
        });
    });

    // single author page
    authorsRouter.get("/:id",(req,res)=>{
        const id = req.params.id;
        res.render("author",{
            nav,
            title : "Author",
            author : authors[id]
        });
    });

    return authorsRouter;
}

// router function call
module.exports = router;