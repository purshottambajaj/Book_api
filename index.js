const express = require('express');
const database= require('./database');
const bodyParser = require('body-parser');
const app = express();  



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

//Delete book by isbn 
app.delete('/book/delete/:isbn', (req, res) => {
   
    const updatedBooks = database.books.filter(
        (book) => book.ISBN !== req.params.isbn);
  
    
    database.books = updatedBooks;
  
    return res.json({ books: database.books });
  });
  
    

    res.json({ books : database.books,
           Pub :database.publication,
                 message: 'Book updated successfully' });
 }  );
 


app.listen(3000,()=>{
    console.log("Server is rumm")
}
)