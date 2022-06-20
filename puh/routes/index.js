var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Винни Пуха */ 
router.get('/1', function(req, res, next) { 
  res.send("<h1>Страница Винни Пуха</h1>") 
});
module.exports = router;


