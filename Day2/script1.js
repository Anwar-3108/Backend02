// const express = require('express');
// const app = express();
// app.get('/', function(req,res){
//     res.send('hello world');
// })
// app.listen( 3000)


const express = require('express')
const app = express()



app.use(function(req, res, next){
    console.log('middleware 1')
    next();
})
app.use(function(req, res, next){
    console.log('middleware 2')
    next();
})
app.set("view engine", "ejs");
app.get('/', function (req, res) {
  res.render('index')
})
app.get('/about', function (req, res) {
  res.render('about')
})
app.get('/profile', function (req, res) {
  res.send('Hello World form profile')
})
app.get('/profile/:query', function (req, res) {
  res.send(`hello from ${req.params.query}`)
})

app.listen(3000)