import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import AllWord from '../AllWord/AllWord'
import { Button, ButtonGroup } from '@mui/material'

export default function TwoTest() {
  const [count, setCount] = useState()
  const [words, setWords] = useState([])
  const [fourBtn, setFourBtn] = useState([])
  const [points, setPoint] = useState(0)

  // const {id} = useParams()
  useEffect(() => {

    axios.get(`http://localhost:3001/words/random`)
    .then((data) => {
      setWords(data.data)})
      .then(() => {
        setCount(0)
        console.log(44);
      })

  }, [])
  
  
  if(words.length > 1 && count === 0) {
     
    let arr = words?.filter((el) => el.wordEnglish !== words[count].wordEnglish)
    let arrTwo = shufle(arr).slice(0, 3)
    console.log(arr, 33 );
    let word = words[count]
    arr.push(word)
    setFourBtn(arr)

  }


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
  
  const play = (e) => {
    // console.log(e.target.value);
    // console.log(words[count].wordEnglish);
    console.log(points);
    if(e.target.value === words[count].wordEnglish) {
      console.log('eee');
      setPoint((prev) => Number(prev) + 1)  
      
      setCount(count + 1)
    }
  }
   console.log(fourBtn);
  return (
    <>
      TwoTest
      {words[count]
        ? 
        <>
          <img src={words[count].img} />
          <ButtonGroup>
            {shufle(fourBtn?.map((el) => <Button key={el.id} value={el.wordEnglish} onClick={(e) => play(e)}>{el.wordEnglish}</Button>))}
          </ButtonGroup>
        </>
        : 
        null
      }
    </>
  )
}

