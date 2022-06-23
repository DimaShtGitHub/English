import axios from 'axios'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom';

export default function TestGame() {
  const [fourW, setFourW] = useState([])
  const [count, setCount] = useState(0)
  const [image, setImage] = useState([])
  const [trueW, setTrueW] = useState([])
  const [points, setPoint] = useState([0])
  const [lengthGame, setLengthGame] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    axios.get(`http://localhost:3001/words/${id}`)
      .then((data) => {
        setLengthGame(data.data.words.length)
        
        let trueWord = data.data.words[count]
        
        let fourWord = data.data.words.filter((el) => el['Words.wordEnglish'] !== trueWord['Words.wordEnglish'])

        const arreyName = shufle(fourWord)
        arreyName.push(trueWord)
        setFourW(shufle(arreyName.slice(-4)))


        setImage(trueWord['Words.img'])
        setTrueW(trueWord['Words.wordEnglish'])
  
      }) 
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
    
  const click = (event) => {
    if (count < lengthGame) {
      setCount((prev) => prev + 1)

      if(event.target.value === trueW){
        setPoint((prev) => Number(prev) + 1)
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
          
        <Box>
          <ButtonGroup>
            {fourW?.map((el, index) => <Button key={index} value={el['Words.wordEnglish']} onClick={(event) => click(event)}>{el['Words.wordEnglish']}</Button>)}
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

