const express = require('express');
const path  = require('path');
const exphbs = require('express-handlebars')
const app = express();
const port = 3000;

app.engine('handlebars',exphbs.engine());
app.set('view engine' , 'handlebars');

app.use(express.static(path.join(__dirname,'images')));
app.use('/',require(path.join(__dirname,'./routes/blog.js')));
app.listen(port , ()=>
{
  console.log("Application listening on Port "+port);
});
