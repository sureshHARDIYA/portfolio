const express = require('express');
const router = express.Router();

const Education = require('./data/education.json');
const General = require('./data/general.json');

router.use((req, res, next) => {
  next();
});

router.get('/education', (req, res) => {
  res.json(Education);
});

router.get('/general', (req, res) => {
  res.json(General);
});

module.exports = router;
