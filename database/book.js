const mongoose =require('mongoose');

const BookSchema=mongoose.Schema
( {
    ISBN: String,
    title: String,
    pubDate: String,
    language: String,
    numPage: Number,
    author: [String],
    publications: [String],
    category: [String]
  });

const Bookmodule = mongoose.model('books',BookSchema);

module.exports=Bookmodule