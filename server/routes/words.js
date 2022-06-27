const router =  require('express').Router();
const {Word, Topic} = require('../db/models');

router.get('/', async (req, res) => {
  const allCategory = await Topic.findAll()
  res.json(allCategory)
})

router.get('/random', async (req, res) => {
  
  const random = Math.floor(Math.random() * 3)
  let words;
  if(random == 0) {
   words = await Word.findAll({order: [['wordRussian', 'DESC']], raw: true})    
  } else if (random == 1) {
    words = await Word.findAll({order: [['wordEnglish', 'ASC']], raw: true}) 
  } else if (random === 2) {
    words = await Word.findAll({order: [['wordEnglish', 'DESC']], raw: true}) 
  } else {
    words = await Word.findAll({order: [['id', 'DESC']], raw: true}) 
  }
 

  function shufle(arr) {
    let barr = [...Array(arr.length)].fill('a');
    for(let i = 0; i < barr.length; i++) {
      let rand  = Math.floor(Math.random() * arr.length)
      if(barr[rand] !== 'a') {
        let num = barr.indexOf('a')
        barr[num] = arr[i]
      } else {
        barr[rand] = arr[i]
      }} 
      return barr
    }
   
    const total = shufle(words)
    
    res.json(total.slice(10,16))
  })


  router.get('/:id', async (req, res) => {
    // const words = await Topic.findAll({where: {id: req.params.id}, include: {model: Word}, raw: true })
    const topicWord = await Word.findAll({include: {model: Topic, where: {id: req.params.id}}, raw: true})
    function shufle(arr) {
      let barr = [...Array(arr.length)].fill('a');
      for(let i = 0; i < barr.length; i++) {
        let rand  = Math.floor(Math.random() * arr.length)
        if(barr[rand] !== 'a') {
          let num = barr.indexOf('a')
          barr[num] = arr[i]
        } else {
          barr[rand] = arr[i]
        }} 
        return barr
      }
      const total = shufle(topicWord)
      res.json(total.slice(0,6))
  }) 


  module.exports = router
