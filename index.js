const express = require('express');
let mongoose = require('mongoose');
const path  = require('path');
const exphbs = require('express-handlebars')
const app = express();
const port = 3000;
mongoose
  .connect('mongodb://127.0.0.1:27017/blogs')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
app.engine('handlebars',exphbs.engine());
app.set('view engine' , 'handlebars');

app.use(express.static(path.join(__dirname,'images')));
app.use('/',require(path.join(__dirname,'./routes/blog.js')));
app.listen(port , ()=>
{
  console.log("Application listening on Port "+port);
});
