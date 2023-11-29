const express = require('express');
const database = require('./database/database');
const Bookmodule = require('./database/book');
const author = require('./database/author');
const publication =require('./database/publication')
const bodyParser = require('body-parser');
const mongo=require('mongoose');
require('dotenv').config();
const app = express();  



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongo.connect(process.env.Mongo_Url )
.then(( ) => {console.log("connected");
})

//all books
app.get("/",(req,res)=>
 { 
    return res.json({books: database.books});
    })

//Specfic book    
app.get("/is/:isbn",(req,res)=>
{ const getsb=database.books.filter(
 (book)=>book.ISBN === req.params.isbn );
  
 if(getsb.length === 0)
  {return res.json({ error : ` ${req.params.isbn} not found `});
 }
   
    return res.json({books: getsb});
    })

//by cat    
app.get("/cat/:cat",(req,res)=>
{ const getsc=database.books.filter(
 (book)=>book.category.includes (req.params.cat) );
  
 if(getsc.length === 0)
  {return res.json({ error : ` ${req.params.cat} not found `});
 }
   
    return res.json({books: getsc});
    })    
   


 //add book   
 app.post("/book/new/", (req, res) => {
     const nbook = req.body;
     database.books.push(nbook);
   
     return res.json({ updatedBook: database.books });
   
 });
 
  
  //Update books of Publication 
 app.put('/publication/update/book/:title',(req,res)=>{
    
    database.publication.forEach((pub) =>
    {
        if(pub.id===req.body.pubid)
         { pub.books.push(req.params.title);}

    }); 
    res.json({ books : database.books,
           Pub :database.publication,
                 message: 'Book updated successfully' });
 }  );

//Delete book by isbn 
app.delete('/book/delete/:isbn', (req, res) => {
   
    const updatedBooks = database.books.filter(
        (book) => book.ISBN !== req.params.isbn);
  
    
    database.books = updatedBooks;
  
    return res.json({ books: database.books });
  });
  
    

 


app.listen(4000,()=>{
    console.log("Server is rumm")
}
)