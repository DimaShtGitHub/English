const express = require('express');
const router = express.Router();
const { Topic, Word, InsertLetter } = require('../db/models')

router.get('/all', async (req, res) => {
try {
  const allWord = await InsertLetter.findAll({include: [{model: Word}, {model: Topic}], raw: true})

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
const shufleArr = shufle(allWord)
  res.json(shufleArr.slice(0, 6)) 
} catch (error) {
  console.log(error)
}
})

router.get('/:id', async(req, res) => {
try {
 const id = req.params.id
  const letterTopic = await InsertLetter.findAll({where: {topicId: id}, include: {model: Word}, raw: true})
  res.json(letterTopic)  
} catch (error) {
  console.log(error)
}

})
  
module.exports = router;
