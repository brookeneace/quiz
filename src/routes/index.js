// src/routes/index.js
const mongoose = require('mongoose');
const router = require('express').Router();
const questController = require('./controllers/questions.controller');
const wineController = require('./controllers/wine.controller');

module.exports = router;

router.get('/questions', questController.list);
router.get('/wines', wineController.list);

router.get('/', (req,res) => {
  res.render('index',
    {title: 'Find out what wine suits your personality',
    message: 'Wine Quiz'});
});

