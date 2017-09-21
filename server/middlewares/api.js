const express = require('express');
const router = express.Router();

const Education = require('./data/education.json');
const General = require('./data/general.json');
const Skills = require('./data/skills.json');

router.use((req, res, next) => {
  next();
});

router.get('/education', (req, res) => {
  res.json(Education);
});

router.get('/general', (req, res) => {
  res.json(General);
});

router.get('/skills', (req, res) => {
  res.json(Skills);
});

module.exports = router;
