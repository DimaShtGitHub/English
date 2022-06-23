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
  const [checkAnswer, setCheckAnswer] = useState(0)
  const [trueAnswers, setTrueAnswers] = useState(0)
  const [stat, setStat] = useState({arrtrue: [], arrfalse:[]})
  const [statWord, setStatWord] = useState({arrtrue: [], arrfalse:[]})

  useEffect(() => {
    axios.get('http://localhost:3001/letter/all')
      .then((data) => {
        const words = data.data.filter((el) => el.topicId === Number(id))
        setWords(words)
      })
  }, [])


  const pushHandler = (event) => {
    // console.log(event.target.value)
    // console.log(words[count])
    // console.log(words[0])
    // console.log(words[count].text.split('').map(el => el.toUpperCase()).join(''))
    // console.log(words[count].letter)
    console.log(words[count]['Word.id'])
    console.log(stat)
    if (event.target.value === words[count]?.letter) {
      console.log('правильный ответ')
      setCheckAnswer(0)
      setCount(count + 1)
      setTrueAnswers(trueAnswers + 1)
      setStat((prev) => ({...prev, arrtrue: [...stat.arrtrue, words[count]['Word.id']]}))
      setStatWord((prev) => ({...prev, arrtrue: [...statWord.arrtrue, words[count]['Word.wordEnglish']]}))
    } else if (checkAnswer < 1) {
      setCheckAnswer(checkAnswer + 1)
      console.log('еще одна попытка')
    } else {
      console.log('провалил все попытки')
      setCheckAnswer(0)
      setStat((prev) => ({...prev, arrfalse: [...stat.arrfalse, words[count]['Word.id']]}))
      setStatWord((prev) => ({...prev, arrfalse: [...statWord.arrfalse, words[count]['Word.wordEnglish']]}))
      setCount(count + 1)
    }
  }

  return (
    <>
      {words[count] ? 
      (<>
      <img className={styles.Img} src={words[count]['Word.img']} alt="" />
      <div className={styles.Word}>{words[count].text.split('').map(el => el.toUpperCase()).join('')}</div>
      {checkAnswer ? <div>попробуй еще разок</div> : null}
       <ButtonGroup className={styles.Btn} variant="outlined" size="small" aria-label="outlined button group">
        {words[count]?.option.split('').map((el, i) => {
        return <Button onClick={pushHandler} value={el} key={i}>{el}</Button>
        })}
      </ButtonGroup>
      </>)
       : (count ? 
        <><h3>Молодец, правильных ответов: {trueAnswers}</h3>
        <div>правильные ответы: {statWord.arrtrue.join(', ')}</div>
        <div>неправильные ответы: {statWord.arrfalse.join(', ')}</div>
        </> : null)}
    </>
  )
}
