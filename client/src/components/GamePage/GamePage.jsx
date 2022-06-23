import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import './style.css'

export default function GamePage() {
  const [names, setName] = useState([])
  const [images, setImg] = useState([])
  const [allNum, setAllNum] = useState([])
  const [round, setRound] = useState([])
  const [btnNames, setBtnNames] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/words', {level: 1})
    .then((data) => {  
      console.log(data.data);
      const allImg = data.data.words.map((el) => el['Words.img'])
      const allWords = data.data.allWords.map((el) => el.wordEnglish)
      setImg(allImg)
      setAllNum(allImg.length - 1)
      setName(allWords)

      const allParam = data.data.words.map((el) => el)
      setRound(allParam)      
    })

    const variants = round.map((arr) => [arr['Words.wordEnglish']])
    
    for (let i = 0; i < variants.length; i++) {
      console.log(variants);
      for (let j = 0; j < 3; j++) {
        const random = Math.floor(Math.random() * names.length - 1) + 1
        if(names[random] === variants[i][0]) {
          variants[i].push(names[random + 1])
        } else {
          variants[i].push(names[random])
        }
        setBtnNames(variants)
        console.log('btnNames', btnNames)
      }
    }

  }, [])

  // useEffect(() => {

  // }, [btnNames])
  // console.log(names);

  const [level, setLevel] = useState([0])

  const numClick = () => {
    // console.log(num);
    if(level[0] === allNum) {
      setLevel([0])
    } else {
      setLevel((prev) => [Number(...prev) + 1])
    }
  }
  console.log(level);

  // console.log('var', variants);
  // console.log(images[0]);

  return (
    <div className='gamePageContainer'>
      <div className="img">
        <img className='picture' src={images[level]} alt='cats' />
      </div>
      <Box >
        <ButtonGroup>
          {btnNames[level]?.map((vari) => <Button onClick={() => numClick()} key={Math.floor(Math.random()* 500) }>{vari}</Button> )}
        </ButtonGroup>
      </Box>
      
    </div>
  )
}
