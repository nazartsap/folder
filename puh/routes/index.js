var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Винни Пуха */ 
router.get('/vinni', function(req, res, next) {
  res.render('hero', {
      title: "Винни Пух",
      picture: "images/vinni.jpg",
      desc: "Плюшевый медвежонок, игрушка"
  });
});

/* Страница Пятачка */
router.get('/pig', function(req, res, next) {
  res.render('hero', {
      title: "Пятачок",
      picture: "images/pig.jpg",
      desc: "Крошечный поросенок, которого зовут Пятачок, и который живет в большом-пребольшом доме"
  });
});

/* Страница Кролика */
router.get('/rabbit', function(req, res, next) {
  res.render('hero', {
      title: "Кролик",
      picture: "images/rabbit.jpg",
      desc: "Кролик, всегда безумно рад видеть Винни-Пуха"
  });
});

/* Страница Иа */
router.get('/iaia', function(req, res, next) {
  res.render('hero', {
      title: "Иа Иа",
      picture: "images/iaia.jpg",
      desc: "Грустный ослик, который однажды потерял хвост"
  });
});

/* Страница Совы */
router.get('/sova', function(req, res, next) {
  res.render('hero', {
      title: "Сова",
      picture: "images/sova.jpg",
      desc: "Если кто-нибудь что-нибудь о чем-нибудь знает, то это, конечно, Сова"
  });
});

module.exports = router;


