const express = require('express');
const router = express.Router();
const { Topic, TopicImg, Word, InsertLetter } = require('../db/models')

router.get('/all', async (req, res) => {

  const allWord = await InsertLetter.findAll({include: {model: Topic, model: Word}, raw: true})
  res.json(allWord)
  })

  
module.exports = router;
