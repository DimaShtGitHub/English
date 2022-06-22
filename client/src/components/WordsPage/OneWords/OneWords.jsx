import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import styles from './OneWords.module.css'





export default function OneWords() {
  
  const allAnimals= [{wordEnglish: 'Duck', img: '/img/Duck.png'} , {wordEnglish: 'Cat', img: '/img/Cat.png'}]
  
  const allWords = [ {symbol: 'u', word: 'D_ck', animal: allAnimals[0]}]
  
  const allSymbol = ['a', 'o', 'u', 'e', 'y', 'i']
  
  const pushHandler = (event) => {
    console.log(event.target.value)
    console.log(allWords)
    if (event.target.value === allWords.Duck) {
      console.log('eeeeeeeee')
    } else {
      console.log('Oh no!!!')
    }
  }

  return (
    <>
      <img className={styles.Img} src={allAnimals[0].img} alt="" />
      <div className={styles.Word}>D_ck</div>
      <ButtonGroup className={styles.Btn} variant="outlined" size="small" aria-label="outlined button group">
        <Button onClick={pushHandler} value={allSymbol[0]}>{allSymbol[0]}</Button>
        <Button onClick={pushHandler} value={allSymbol[2]}>{allSymbol[2]}</Button>
        <Button onClick={pushHandler} value={allSymbol[5]}>{allSymbol[5]}</Button>
      </ButtonGroup>
    </>
  )
}

