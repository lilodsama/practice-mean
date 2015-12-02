var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb');
var ObjectID = require('mongodb').ObjectID;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.end('hello  world');
});

router.post('/user',function(req, res, next){
  console.log('user post req body', req.body);
  
  MongoClient.connect('mongodb://127.0.0.1:27017/test').then(function(db){
    return db.collection('user').update(req.body, req.body, {upsert: true}); 
  }).then(res.json.bind(res)).catch(function(err){
    next(err);
  });

});

router.get('/user', function(req, res, next){
  MongoClient.connect('mongodb://127.0.0.1:27017/test').then(function(db){
    return db.collection('user').find({}).toArray();
  }).then(res.json.bind(res));
});

router.post('/login', function(req, res, next){
  
  MongoClient.connect('mongodb://127.0.0.1:27017/test').then(function(db){
    return db.collection('user').find(req.body).toArray();
  }).then(res.json.bind(res));
});


module.exports = router;
