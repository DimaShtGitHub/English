const express = require('express');
const router = express.Router();
const { Topic } = require('../db/models')

router.get('/card', async (req, res) => {
const allTopic = await Topic.findAll({raw: true})
res.json(allTopic)
})

module.exports = router;
