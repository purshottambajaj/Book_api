const mongoose =require('mongoose');

const AuthorSchema=mongoose.Schema
({
    id: Number,
    name: String,
    books: [String]
  })

const Authormodule = mongoose.model('Authous',AuthorSchema);

module.exports=Authormodule