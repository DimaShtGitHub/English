const express = require('express');
const router = express.Router();
const { Topic, TopicImg, Word } = require('../db/models')

router.get('/all', async (req, res) => {
  const allWord = await Word.findAll({raw: true})
  res.json(allWord)
  })

  
module.exports = router;
