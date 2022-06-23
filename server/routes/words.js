const router =  require('express').Router();
const {Word, Topic} = require('../db/models');

router.get('/', async (req, res) => {
  const allCategory = await Topic.findAll()
  res.json(allCategory)
})

router.get('/:id', async (req, res) => {
  console.log(req.params);
  const words = await Topic.findAll({where: {id: req.params.id}, include: {model: Word}, raw: true })
  const allWords = await Word.findAll();
  // console.log(words);
  res.json({words, allWords})
  res.end()
}) 

module.exports = router
