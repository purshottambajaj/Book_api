const mongoose =require('mongoose');

const PublicationSchema=mongoose.Schema
({
    id: Number,
    name: String,
    books: [String]
})

const Publicationmodule = mongoose.model('Publications',PublicationSchema);

module.exports=Publicationmodule