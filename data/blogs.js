const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let postschema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  slug: {
    type: String
  }
}, {
    collection: 'posts'
  })
module.exports = mongoose.model('Blogs', postschema)


// blogs=[
//     {
//         title: "Getting Started with Python",
//         content: "Python Learning Material",
//         slug: 'python-tutorial'
//     },
//     {
//         title: "Getting Started with Java",
//         content: "Java Learning Material",
//         slug: 'java-tutorial'
//     },
//     {
//         title: "Getting Started with CPP",
//         content: "CPP Learning Material",
//         slug: 'cpp-tutorial'
//     },
//     {
//         title: "Getting Started with SQL",
//         content: "SQL Learning Material",
//         slug: 'sql-tutorial'
//     }
// ];
// module.exports=blogs;