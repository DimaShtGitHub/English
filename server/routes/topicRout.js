const express = require('express');
const router = express.Router();
const { Topic, TopicImg } = require('../db/models')

router.get('/card', async (req, res) => {
const allTopic = await Topic.findAll({include: {model: TopicImg}, raw: true})
res.json(allTopic)
})

module.exports = router;
