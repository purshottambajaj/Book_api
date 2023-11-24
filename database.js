const books = [
    {
      ISBN: "9780061120084",
      title: "To Kill a Mockingbird",
      pubDate: "July 11, 1960",
      language: "English",
      numPage: 281,
      author: ["Harper Lee"],
      publications: ["HarperCollins"],
      category: ["Fiction", "Classic"],
    },
    {
      ISBN: "9780735219090",
      title: "Becoming",
      pubDate: "November 13, 2018",
      language: "English",
      numPage: 448,
      author: ["Michelle Obama"],
      publications: ["Crown Publishing Group"],
      category: ["Autobiography", "Memoir"],
    },
    
  ];
  
  const author = [
    {
      id: 1,
      name: "Harper Lee",
      books: ["To Kill a Mockingbird"],
    },
    {
      id: 2,
      name: "Michelle Obama",
      books: ["Becoming"],
    },
    
  ];
  
  const publication = [
    {
      id: 1,
      name: "HarperCollins",
      books: ["To Kill a Mockingbird"],
    },
    {
      id: 2,
      name: "Crown Publishing Group",
      books: ["Becoming"],
    },

  ];
  
  module.exports = {books,author,publication};