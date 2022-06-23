const express = require('express');
const router = express.Router();
const { Topic, TopicImg, InsertLetter } = require('../db/models')

router.get('/card', async (req, res) => {
  try {
  const allTopic = await Topic.findAll({include: {model: TopicImg}, raw: true})
res.json(allTopic)  
  } catch (error) {
   console.log(error) 
  }
})

router.get('/words', async (req, res) => {
  try {
  const allTopic = await InsertLetter.findAll({ attributes: ['topicId'], raw: true})
  
  function uArray() {
    const arrTotal = [];
    for (var i=0; i < allTopic.length; i++)
        if (arrTotal.indexOf(allTopic[i].topicId) === -1)
        arrTotal.push(allTopic[i].topicId);
    return arrTotal;
}
const count = uArray()
const final = []
for(let i=0; i< count.length; i++) {
const imgTopic = await Topic.findOne({where: {id: count[i]}, attributes: ['id', 'title'], include: {model: TopicImg}, raw: true}) 
final.push(imgTopic)
}
  res.json(final)  
  } catch (error) {
   console.log(error) 
  }
})

module.exports = router;
