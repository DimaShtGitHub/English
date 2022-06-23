const router =  require('express').Router();
const {Word, Topic} = require('../db/models');

router.get('/', async (req, res) => {
  const allCategory = await Topic.findAll()
  res.json(allCategory)
})

router.get('/random', async (req, res) => {
  
  const words = await Word.findAll({raw: true}) 
  
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
    res.json(total.slice(0,6))
  })


  router.get('/:id', async (req, res) => {
    const words = await Topic.findAll({where: {id: req.params.id}, include: {model: Word}, raw: true })
    res.json({words})
  }) 


  module.exports = router
