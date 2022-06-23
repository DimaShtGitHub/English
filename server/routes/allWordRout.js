const express = require('express');
const router = express.Router();
const { Topic, TopicImg, Word } = require('../db/models')

router.get('/all', async (req, res) => {
  try {
    const allWord = await Word.findAll({order: [['wordEnglish', 'ASC']],raw: true})
  res.json(allWord) 
  } catch (error) {
    console.log(error)
  }
  })

  
module.exports = router;
