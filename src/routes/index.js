// src/routes/index.js
const mongoose = require('mongoose');
const router = require('express').Router();
const fileController = require('./controllers/file.controller');

module.exports = router;

router.get('/files', fileController.list);
router.put('/files/:fileId', fileController.update);
router.delete('/files/:fileId', fileController.delete);

router.get('/', (req,res) => {
  res.render('index',
    {title: 'Find out what wine suits your personality',
    message: 'Wine Quiz'});
});

