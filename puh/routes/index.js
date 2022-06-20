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
/* Страница Пятачка */
router.get('/pig', function(req, res, next) {
  res.send("<h1>Страница Пятачка</h1>")
});

/* Страница Кролика */
router.get('/rabbit', function(req, res, next) {
  res.send("<h1>Страница Кролика</h1>")
});

/* Страница Иа */
router.get('/iaia', function(req, res, next) {
  res.send("<h1>Страница Иа</h1>")
});

/* Страница Совы */
router.get('/sova', function(req, res, next) {
  res.send("<h1>Страница Совы</h1>")
});

module.exports = router;


