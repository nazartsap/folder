var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница 3090 */ 
router.get('/3090', function(req, res, next){
  res.render('hero', {
    title: "RTX3090",
    picture: "images/3090.png",
    desc: 'Оспечивают оптимальную производительность в топовых играх благодаря возможностям Ampere — архитектуры NVIDIA RTX второго поколения.'
  })
});

/* Страница 3070ti */ 
router.get('/3070ti', function(req, res, next){
  res.render('hero', {
    title: "RTX3070ti",
    picture: "images/3070ti.png",
    desc: 'Оспечивают оптимальную производительность в топовых играх благодаря возможностям Ampere — архитектуры NVIDIA RTX второго поколения.'
  })
});

/* Страница 3070 */ 
router.get('/3070', function(req, res, next){
  res.render('hero', {
    title: "RTX3070",
    picture: "images/3070.png",
    desc: 'Оспечивают оптимальную производительность в топовых играх благодаря возможностям Ampere — архитектуры NVIDIA RTX второго поколения.'
  })
});

module.exports = router;
