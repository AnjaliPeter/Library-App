const express = require("express");
// router
const booksRouter = express.Router();

// router function
function router(nav){
    
    // books array
    var books = [
        {
            title : "2666",
            author : "Roberto Bolano",
            genre : "Novel",
            img : "book1.jpg",
            about : "Completed in 2003 shortly before his death, 2666 is not only Roberto Bolaño's masterpiece but also one of the finest and most important novels of the 21st century. It's an entire world unto itself, one — not unlike our own — filled with horror, neglect, depravity, brilliance, and beauty. Epic in scope and epitomizing the total novel, 2666 fuses many different genres and styles to create a singular and unforgettable work of contemporary fiction. While Bolaño's swan song marked the pinnacle of a sadly truncated literary career, his immense talent, creativity, and vision endure."
        },
        {
            title : "All About Love",
            author : "Bell Hooks",
            genre : "Creative nonfiction",
            img : "book2.jpg",
            about : "We're taught to think of love as something that happens to us. It's a magical but altogether passive experience. In her deeply personal and emphatic All About Love, renowned social activist and feminist bell hooks asserts that, in fact, love is a choice we must all make and it's not nearly as abstract or elusive as many of us have come to believe. The book not only explores the role of love in our lives and the ways our culture has distorted its meaning, but guides us — with clear definitions and examples — toward a better understanding of how to cultivate it. If you've ever wondered why some relationships stand the test of time while others crumble, you should read this book."
        },
        {
            title : "Desert Solitaire",
            author : "Edward Abbey",
            genre : "Autobiography",
            img : "book3.jpg",
            about : "No author encapsulated and celebrated the American Southwest more engagingly than iconoclast and raconteur Edward Abbey. Desert Solitaire: A Season in the Wilderness — now nearly a half-century old — is a classic of environmental writing. In this autobiographical work, Abbey chronicles his time as a park ranger and reflects on landscape, culture, politics, tourism, environmental disregard, and degradation — doing so with a unique blend of ornery charm and breathtaking description. Though set in his beloved Southwest, Desert Solitaire beautifully and brashly captures the essence of the American outdoors, replete with disdain for those who'd seek to spoil its natural wonder."
        }
    ]
    
    // books page
    booksRouter.get("/",(req,res)=>{
        res.render("books",
        {
            nav,
            title : "Books",
            books
        });
    });
    
    // single book page
    booksRouter.get("/:id",(req,res)=>{
        const id = req.params.id;
        res.render("book",{
            nav,
            title : "Book",
            book : books[id]
        });
    });

    return booksRouter;
}

// router function call
module.exports = router;