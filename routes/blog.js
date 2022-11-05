const express = require('express');
const path  = require('path');
const blogs = require('../data/blogs.js');
const router = express.Router();

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../views/index.html'));
})
router.get('/blogs',(req,res)=>{
  // blogs.forEach(element => {
  //   console.log(element.title);
  // });
  // res.sendFile(path.join(__dirname,'../views/blogs.html'));
  res.render('blog',{blogs:blogs})
})

router.get('/blogpost/:slug',(req,res)=>{
  myblog = blogs.filter(e=>{
    return e.slug == req.params.slug;
  })
  res.render('blogpost',{title:myblog[0].title,content:myblog[0].content});
})

module.exports=router;