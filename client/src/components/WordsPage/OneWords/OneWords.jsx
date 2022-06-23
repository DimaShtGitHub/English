import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import styles from './OneWords.module.css'





export default function OneWords() {
  const { id } = useParams();

  const [count, setCount] = useState(0)
  const [words, setWords] = useState([])
  const [option, setOption] = useState([])
  const [checkAnswer, setCheckAnswer] = useState(0)
  const [trueAnswers, setTrueAnswers] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3001/letter/all')
      .then((data) => {
        const words = data.data.filter((el) => el.topicId === Number(id))
        setWords(words)
        setOption(words[0].option.split(''))
      })
  }, [])


  const pushHandler = (event) => {
    // console.log(event.target.value)
    // console.log(words[count])
    // console.log(words[0])
    // console.log(words[count].text)
    // console.log(words[count].letter)
    // console.log(words[count]['Word.img'])
    if (event.target.value === words[count]?.letter) {
      console.log('правильный ответ')
      setCheckAnswer(0)
      setCount(count + 1)
      setOption(words[count + 1]?.option.split(''))
      setTrueAnswers(trueAnswers + 1)
    } else if (checkAnswer < 1) {
      setCheckAnswer(checkAnswer + 1)
      console.log('еще одна попытка')
    } else {
      console.log('провалил все попытки')
      setCheckAnswer(0)
      setCount(count + 1)
      setOption(words[count + 1]?.option.split(''))
    }
  }

  {/* <h3>Молодец, ты верно заполнил {trueAnswers} слова</h3> */ }
  // {count === words.length? <h3>Молодец, правильных ответов: {trueAnswers}</h3> : null}

  return (
    <>
      {words[count] ? 
      <>
      <img className={styles.Img} src={words[count]['Word.img']} alt="" />
      <div className={styles.Word}>{words[count].text}</div>
      {checkAnswer ? <div>попробуй еще разок</div> : null}
       <ButtonGroup className={styles.Btn} variant="outlined" size="small" aria-label="outlined button group">
        <Button onClick={pushHandler} value={option[0]}>{option[0]}</Button>
        <Button onClick={pushHandler} value={option[1]}>{option[1]}</Button>
        <Button onClick={pushHandler} value={option[2]}>{option[2]}</Button>
      </ButtonGroup>
      </>
       : <h3>Молодец, правильных ответов: {trueAnswers}</h3>}
    </>
  )
}
