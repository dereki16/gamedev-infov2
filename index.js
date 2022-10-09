const express = require('express');

const app = express();
const quote = require("inspirational-quotes");


app.set("view engine", "ejs");
app.use(express.static("public"))

app.get('/', (req, res) => {
   res.send('Hello Express app!')
});

app.get('/header', (req, res) => {
  
  res.render('header')
});

app.get('/welcome', (req, res) => {
  let quotee = quote.getRandomQuote();
  
  res.render('welcome', {"Quote": quotee})
});

app.get('/engine', (req, res) => {

   res.render('engine')
});

app.get('/tutorial', (req, res) => {

   res.render('tutorial')
});

app.get('/conception', (req, res) => {

   res.render('conception')
});

app.get('/footer', (req, res) => {

   res.render('footer')
});

app.listen(3000, () => {
   console.log('server started');
});