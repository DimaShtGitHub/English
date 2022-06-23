import axios from 'axios'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect, useState } from 'react'
import styles from './TestGame.module.css'
import { useParams } from 'react-router-dom';

export default function TestGame() {
  const [fourW, setFourW] = useState([])
  const [count, setCount] = useState(0)
  const [image, setImage] = useState([])
  const [trueW, setTrueW] = useState({title: '', id: 0})
  const [points, setPoint] = useState([0])
  const [lengthGame, setLengthGame] = useState([])
  const [result, setResult] = useState([])
  const [stat, setStat] = useState({arrTrue: [], arrFalse: []})
  const {id} = useParams()
  
  // console.log('fourW', fourW);
  // console.log('count', count);
  // console.log('image', image);
  // console.log('trueW', trueW);
  // console.log('points', points);
  // console.log('result', result);
  // console.log('stat', stat);


  useEffect(() => {
    if(id === 'random'){
      axios.get(`http://localhost:3001/words/random`)
      .then(data => {
        setLengthGame(data.data.length)
        })
    } else {
      axios.get(`http://localhost:3001/words/${id}`)
        .then((data) => {
          setLengthGame(data.data.words.length)
          
          let trueWord = data.data.words[count]
          
          let fourWord = data.data.words.filter((el) => el['Words.wordEnglish'] !== trueWord['Words.wordEnglish'])
  
          const arreyName = shufle(fourWord)
          arreyName.push(trueWord)
          setFourW(shufle(arreyName.slice(-4)))
  
          setImage(trueWord['Words.img'])
          setTrueW({title: trueWord['Words.wordEnglish'], id: trueWord['Words.id']})
    
        }) 
    }
    }, [count])
    
  function shufle(arr) {
    let barr = [...Array(arr.length)].fill('a');
    
    for(let i = 0; i < barr.length; i++) {
      let rand  = Math.floor(Math.random() * arr.length)
      if(barr[rand] !== 'a') {
        let num = barr.indexOf('a')
        barr[num] = arr[i]
      } else{
        barr[rand] = arr[i]
      }
      }
      
      return barr
    }
    
    function timerResult() {
      setTimeout(() => {
        setResult('')
        
      }, 1000)
    }

    function timerWindow() {
      setTimeout(() => setCount((prev) => prev + 1), 1000)
    }
  const click = (event) => {
    if (count < lengthGame) {
      timerWindow()

      if(event.target.value === trueW.title){
        setResult('молодец')
        
        setStat((prev) => ({...prev, arrTrue: [...stat.arrTrue, event.target.id]}))
        timerResult() 
        setPoint((prev) => Number(prev) + 1)
        console.log(stat);
      } else {
        setResult('не правильно')
        setStat((prev) => ({...prev, arrFalse: [...stat.arrFalse, trueW.id]}))

        timerResult() 
      }
    } 
  }
  
  return (
    <div className='test_game_container'>
      {count < lengthGame  ?   
      <div>
        TestGame
        <div>
        <img className={'picture'} src={image} alt='pic'/>
        </div>
        <h3>{result}</h3>
        <Box>
          <ButtonGroup>
            {fourW?.map((el, index) => <Button key={index} id={el['Words.id']} value={el['Words.wordEnglish']} onClick={(event) => click(event)}>{el['Words.wordEnglish']}</Button>)}
          </ButtonGroup>
        </Box>
      </div>
       : 
      <div>
        <h2>Поздравляю, ты победил!!!</h2>
        <h4>Ты ответил на {points} вопроса  правильно</h4>
      </div>  }
    
    </div>
  )
}

