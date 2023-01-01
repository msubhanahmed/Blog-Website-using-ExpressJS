const express = require('express');
const mongoose = require('mongoose');
const path  = require('path');
const blogs = require('../data/blogs.js');
const router = express.Router();

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../views/index.html'));
})
router.get('/blogs',async (req,res)=>{
  let data = await blogs.find().lean();
  res.render('blog',{blogs:data})

  
})

router.get('/blogpost/:slug',async (req,res)=>{
  const query = {slug:req.params.slug};
  myblog = await blogs.find(query).limit(1).lean();
  console.log(myblog[0].title);
  res.render('blogpost',{title:myblog[0].title,content:myblog[0].content});
})

module.exports=router;