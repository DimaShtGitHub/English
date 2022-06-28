const express = require('express');
const router = express.Router();
const {  Word, Statistic, TrueStatistic } = require('../db/models')
const { Op } = require("sequelize");


// router.get('/user', async(req, res) => {
//   const id = req.session?.user?.id
//   const usersStatistic = await Statistic.findAll({where: {userId: id}, include: {model: Word}, raw: true})
//   res.json(usersStatistic)
// })


router.post('/', async (req, res) => {
  try {
  const truearr = req.body.stat.arrtrue
  const falsearr = req.body.stat.arrfalse
  console.log(falsearr)
  console.log(truearr)
  const id = req.session?.user?.id
  const allWordId = await Statistic.findAll({where: {userId: id}, raw: true})
  const allTrieWordId = await TrueStatistic.findAll({where: {userId: id}, raw: true})
  //создаем массив только wordId [3, 5, 8]
  const wordId = allWordId.map(el => el.wordId)
  const trueWordId = allTrieWordId.map(el => el.wordId)
  console.log(wordId, 'false')
  console.log(trueWordId, 'true')

  //проходим по массиву и смотрим есть ли в нем значения из массива false
  for(i = 0; i < falsearr?.length; i++) {
    if(wordId.indexOf(falsearr[i]) === -1 && trueWordId.indexOf(falsearr[i]) === -1) {
      console.log('create', falsearr[i])
      await Statistic.create({userId: id, wordId: falsearr[i], count: 1})
    } else if(wordId.indexOf(falsearr[i]) !== -1){
      console.log('update ++ false', falsearr[i])
      let oneFalseWord = await Statistic.findOne({where: {userId: id, wordId: falsearr[i]}})
      oneFalseWord.count++
      await oneFalseWord.save()
    } else if (trueWordId.indexOf(falsearr[i]) !== -1) {
      console.log('вычитвем из тру --', falsearr[i])
      let oneFalseWord = await TrueStatistic.findOne({where: {userId: id, wordId: falsearr[i]}})
      let count = oneFalseWord.count
      if(count <= 2 ){
        await TrueStatistic.destroy({where: {userId: id, wordId: falsearr[i]}})
      } else {
        oneFalseWord.count = count-2
      await oneFalseWord.save() 
      }
    }
  }

   //проходим по массиву и смотрим есть ли в нем значения из массива true
   for(i = 0; i < truearr?.length; i++) {
    if(wordId.indexOf(truearr[i]) !== -1) {
      let oneTrueWord = await Statistic.findOne({where: {userId: id, wordId: truearr[i]}})
      const count = oneTrueWord.count 
      if(count <= 2) {
        console.log('destroy из false', truearr[i])
        await Statistic.destroy({where: {userId: id, wordId: truearr[i]}})
      } else {
        console.log('-2 из false', truearr[i])
          oneTrueWord.count = count - 2
        await oneTrueWord.save()
      }
    }else if(trueWordId.indexOf(truearr[i]) === -1 && wordId.indexOf(truearr[i]) === -1) {
      console.log('create', truearr[i])
      await TrueStatistic.create({userId: id, wordId: truearr[i], count: 1})
    } else if(trueWordId.indexOf(truearr[i]) !== -1) {
      console.log('++ count in true', truearr[i])
      let trueWord = await TrueStatistic.findOne({where: {userId: id, wordId: truearr[i]}})
      trueWord.count++
      await trueWord.save()
    }
   }

  } catch (error) {
    console.log(error)
  }
})


router.get('/user', async(req, res) => {
  const id = req.session?.user?.id
  const usersStatisticFalse = await Statistic.findAll({where: {userId: id, count: {[Op.gte]: 2}},include: {model: Word}, raw: true})
  res.json(usersStatisticFalse)
})
  
router.get('/usertrue', async(req, res) => {
  const id = req.session?.user?.id
  const usersStatisticTrue = await TrueStatistic.findAll({where: {userId: id, count: {[Op.gte]: 3}},include: {model: Word}, raw: true})
  res.json(usersStatisticTrue)
})

module.exports = router;
