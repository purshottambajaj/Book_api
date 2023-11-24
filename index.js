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
 
 


app.listen(4000,()=>{
    console.log("Server is rumm")
}
)