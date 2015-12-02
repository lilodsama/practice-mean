var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.end('hello  world');
});

router.post('/user',function(req, res, next){
  console.log('user post req body', req.body);
  res.json({msg: 'ok'});
});

module.exports = router;
