// src/routes/index.js
const mongoose = require('mongoose');
const router = require('express').Router();
const wineController = require('./controllers/wine.controller');

module.exports = router;

router.get('/results', wineController.list);

/*
router.post('/results', function(req, res, next) {
  const newWine = {
    winename: req.body.winename,
    description: req.body.description
  };

  wines.push(newWine);
  res.json(wines);
});
*/



router.get('/', function(req, res){
	res.render('index', {title: 'Your wine personality', message: 'Wine Quiz'} )
});
