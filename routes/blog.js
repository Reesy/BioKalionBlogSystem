var Blog = require('../models/blog'); //links to schema
var express = require('express');
var router = express.Router();


router.use(function(req, res, next){

  console.log(req.method, req.url);

  next();

});

router.route('/blog')
  .get(function(req, res) {
    Blog.find(function(err, blog) {
      if (err) {
        return res.send(err);
      }
      console.log(blogTemp);
      res.json(blogTemp); //this should return a lookup from mongoose 
    });
  })
  .post(function(req, res) {
    console.log(req.body);
    var blogConnection = new Blog(req.body);
    blogConnection.save(function(err) {
      if (err) {
        return res.send(err);
      }
      //console.log('Saved');
      //res.send({ message: 'Blog Added' });
    });
  });



router.route('/blog/:blogtitle')
  .get(function(req, res) {
    Blog.find(function(err, blog) {
      if (err) {
        return res.send(err);
      } 
      //this needs to be abstracted to an indexing function
      if(req.params.blogtitle == 1){
        res.send(blog);
        console.log(blog);
      }else{
        res.send(blog);
        console.log(blog);
      }
     // res.json(blogTemp);
    });
  });



var pagination = function(desiredPageNum){


  
}

module.exports = router;

var testMessage = "hello";


var blogTemp = {
  "blogPosts": [
    {
      "id":1,
      "title":"Server Number 1 blog post!",
      "content": "Example content one"
    },
    {
      "id":2,
      "title":"Server Number 2 blog post!",
      "content": "Example of the second page content!"
    
    },
    {
      "id":3,
      "title":"Server Number 3 blog post!",
      "content": "Example content three"
    },
    {
      "id":4,
      "title":"Server Number 4 blog post!",
      "content": "Example of the fourth content!"
    
    },
    {
      "id":5,
      "title":"Server Number 5 blog post!",
      "content": "Example content five"
    },
    {
      "id":6,
      "title":"Server Number 6 blog post!",
      "content": "Example of the sixth page content!"
    
    },
    {
      "id":7,
      "title":"Server Number 7 blog post!",
      "content": "Example content seven"
    },
    {
      "id":8,
      "title":"Server Number 8 blog post!",
      "content": "Example of the eights page content!"
    
    }
    ]
}