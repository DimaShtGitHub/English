import axios from 'axios'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect, useState } from 'react'

export default function TestGame() {
  const [words, setWord] = useState([])
  const [fourW, setFourW] = useState([])
  const [count, setCount] = useState([0])
  const [image, setImage] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/words', {level: 1})
      .then((data) => {
        setWord(data.data.words)
        let trueWord = data.data.words[count]
        
        let fourWord = data.data.words.filter((el) => el['Words.wordEnglish'] !== trueWord['Words.wordEnglish'])

        const arreyName = shufle(fourWord)
        arreyName.push(trueWord)
        setFourW(shufle(arreyName.slice(-4)))
        console.log(trueWord);

        setImage(trueWord['Words.img'])
      }) 
    }, [count])
    
    console.log(count);
    console.log(image);
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
  
  const click = () => {
    setCount((prev) => [Number(...prev) + 1])
  }
    
  return (
    <div>
      TestGame
      <Box>
        <div>
          <img className={'picture'} src={image} alt='pic'/>
        </div>
        <ButtonGroup>
          {fourW?.map((el, index) => <Button key={index}  onClick={() => click()}>{el['Words.wordEnglish']}</Button>)}
        </ButtonGroup>
      </Box>
    </div>
  )
}

