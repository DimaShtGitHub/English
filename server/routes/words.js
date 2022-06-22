const router =  require('express').Router();
const {Word, Topic} = require('../db/models');

router.get('/', async (req, res) => {
  console.log(req.body);
  const words = await Topic.findAll({where: {id: 1}, include: {model: Word}, raw: true })
  const allWords = await Word.findAll();
  // console.log(words);
  res.json({words, allWords})
}) 

module.exports = router
