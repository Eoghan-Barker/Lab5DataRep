// Import Express and setup a port to listen on
const express = require("express");
const app = express();
const port = 3000;
//Import express body-parser middleware to search the body of a http request from post method
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Listen for a http request coming from "/" URL with the get method
// Send message back to browser in the arrow function
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/datarep", (req, res) => {
  res.send("Welcome to Data Representation & Querying");
});

// Add a parameter "name" - so you can specify what variable you want from the endpoint
app.get("/hello/:name", (req, res) => {
  console.log(req.params.name);
  res.send("Hello " + req.params.name);
});

app.get("/api/books", (req, res) => {
  // Create an array of book objects with json data
  const myBooks = [
    {
      title: "Learn Git in a Month of Lunches",
      isbn: "1617292419",
      pageCount: 0,
      thumbnailUrl:
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
      status: "MEAP",
      authors: ["Rick Umali"],
      categories: [],
    },
    {
      title: "MongoDB in Action, Second Edition",
      isbn: "1617291609",
      pageCount: 0,
      thumbnailUrl:
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
      status: "MEAP",
      authors: [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett",
      ],
      categories: [],
    },
    {
      title: "Getting MEAN with Mongo, Express, Angular, and Node",
      isbn: "1617292036",
      pageCount: 0,
      thumbnailUrl:
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
      status: "MEAP",
      authors: ["Simon Holmes"],
      categories: [],
    },
  ];

  // Send the json data to the browser
  res.json({
    books: myBooks,
  });
});

// Send a html file to the browser
app.get("/test", (req, res) => {
  // Directory containing the html file
  res.sendFile(__dirname + "/index.html");
});

// Pull the data out from the form using the url
app.get("/name", (req, res) => {
  console.log(req.query.lname);
  res.send("Hello " + req.query.fname + " " + req.query.lname);
});

// Pull the data out from the form without the data being in the url
app.post("/name", (req, res) => {
  res.send("Hello from post " + req.body.fname + " " + req.body.lname)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
