import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import styles from './OneWords.module.css'





export default function OneWords() {

const [count, setCount] = useState(0)
const [allAnimals, setAllAnimals] = useState([])
  
  useEffect(()=> {
    setAllAnimals([
      {symbol: 'u', word: 'D_ck', animal: {wordEnglish: 'Duck', img: '/img/Duck.png'}},
      {symbol: 'a', word: 'C_t', animal: {wordEnglish: 'Cat', img: '/img/Cat.png'}},
    ])
  }, [])
  
  const allSymbol = ['a', 'o', 'u', 'e', 'y', 'i']
  
  const pushHandler = (event) => {
    console.log(event.target.value)
    console.log('Words symbol:', allAnimals[0].symbol)
    console.log('actual count:', count)
    console.log('Word img', allAnimals[0].animal.img);
    setCount(count + 1)
    if (event.target.value === allAnimals[count]?.symbol) {
      console.log('eeeeeeeee')
    } else {
      console.log('Oh no!!!')
    }
  }

  return (
    <>
      <img className={styles.Img} src={allAnimals[count]?.animal.img} alt="" />
      <div className={styles.Word}>{allAnimals[count]?.word}</div>
      <ButtonGroup className={styles.Btn} variant="outlined" size="small" aria-label="outlined button group">
        <Button onClick={pushHandler} value={allSymbol[0]}>{allSymbol[0]}</Button>
        <Button onClick={pushHandler} value={allSymbol[2]}>{allSymbol[2]}</Button>
        <Button onClick={pushHandler} value={allSymbol[5]}>{allSymbol[5]}</Button>
      </ButtonGroup>
    </>
  )
}

