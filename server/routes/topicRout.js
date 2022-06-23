const express = require('express');
const router = express.Router();
const { Topic, TopicImg } = require('../db/models')

router.get('/card', async (req, res) => {
  try {
  const allTopic = await Topic.findAll({include: {model: TopicImg}, raw: true})
res.json(allTopic)  
  } catch (error) {
   console.log(error) 
  }
})

module.exports = router;
