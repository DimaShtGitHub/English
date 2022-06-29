import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from './OneWords.module.css'
import {useSelector} from 'react-redux';

export default function OneWords() {
  const user = useSelector((state)=>state.user)
  const sound = useSelector((state) => state.sound)
  const { id } = useParams();
  const navigate = useNavigate();

  const [count, setCount] = useState(0)
  const [words, setWords] = useState([])
  const [checkAnswer, setCheckAnswer] = useState(0)
  const [trueAnswers, setTrueAnswers] = useState(0)
  const [stat, setStat] = useState({arrtrue: [], arrfalse:[]})
  const [statWord, setStatWord] = useState({arrtrue: [], arrfalse:[]})

  useEffect(() => {
    if(id === 'random'){
      axios.get('http://localhost:3001/letter/all')
      .then((data) => setWords(data.data))
    } else {
      axios.get(`http://localhost:3001/letter/${Number(id)}`)
      .then((data) => {
        function shufle(arr) {
          let barr = [...Array(arr.length)].fill('a');
          for(let i = 0; i < barr.length; i++) {
            let rand  = Math.floor(Math.random() * arr.length)
            if(barr[rand] !== 'a') {
              let num = barr.indexOf('a')
              barr[num] = arr[i]
            } else {
              barr[rand] = arr[i]
            }} 
            return barr
          }
        setWords(shufle(data.data).slice(0, 4))
      } )  
    }
  }, [])


  const pushHandler = (event) => {
    if (event.target.value === words[count]?.letter) {
      setCount(count + 1)
      talk(`Yes, ${words[count]['Word.wordEnglish']}`)
      setCheckAnswer(0)
      setTrueAnswers(trueAnswers + 1)
      setStat((prev) => ({...prev, arrtrue: [...stat.arrtrue, words[count]['Word.id']]}))
      setStatWord((prev) => ({...prev, arrtrue: [...statWord.arrtrue, words[count]['Word.wordEnglish']]}))
    } else if (checkAnswer < 1) {
      setCheckAnswer(checkAnswer + 1)
    } else {
      setCount(count + 1)
      talk('No')
      setCheckAnswer(0)
      setStat((prev) => ({...prev, arrfalse: [...stat.arrfalse, words[count]['Word.id']]}))
      setStatWord((prev) => ({...prev, arrfalse: [...statWord.arrfalse, words[count]['Word.wordEnglish']]}))
    }
  }
  
  if (count !== 0 && count === words.length && user.name) {
    axios.post('http://localhost:3001/statistic', {stat}, {withCredentials: true})
  }

 
  const talk = (str) => {
    if (sound) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(str);
     synth.speak(utterThis);
    }
}

  return (
    <>
      {words[count] ? 
      (<>
      <div className={styles.Home}>
      <h4 className={styles.Stat1}>Задание {count+1} из {words.length}</h4>
      <img className={styles.Img} src={words[count]['Word.img']} alt="" />
      <div className={styles.Word}>{words[count].text.split('').map(el => el.toUpperCase()).join('')}</div>
       <ButtonGroup className={styles.Btn} variant="outlined" size="small" aria-label="outlined button group">
        {words[count]?.option.split('').map((el, i) => {
          return <Button onClick={pushHandler} value={el} key={i}>{el}</Button>
        })}
      </ButtonGroup>
        {checkAnswer ? <div>попробуй еще разок</div> : null}
      </div>
      </>)
       : (count ? (<>
        <div className={styles.Home}>
{statWord.arrtrue?.length > 0 ? (
  <>
   <h3 className={styles.Stat}>Молодец, правильных ответов: {trueAnswers}</h3>

        <div>правильные ответы: {statWord.arrtrue.map((el, i)=> {
          return <Button onClick={() => talk(el)} value={el} key={i}>{el}</Button>
        })}</div></>
) : (
  <h3 className={styles.Stat}>Правильных ответов нет</h3>
)}
       
{statWord.arrfalse.length > 0 ? (
   <div>неправильные ответы: {statWord.arrfalse.map((el, i) => {
          return <Button value={el} onClick={() => talk(el)} key={i}>{el}</Button>
        })}</div>
):(null)}
       
        <div>
              <Button variant="text" onClick={() => {navigate("/words", { replace: true })}} type="submit">Вернуться к выбору темы</Button>
              </div>
              {user.name ? (null):(
            <>
            <h5> 
             <span color='green' onClick={() => {navigate("/auth/reg", { replace: true })}}>Зарегестрируйся </span>  или 
             <span onClick={() => {navigate("/auth/login", { replace: true })}}> войди</span> , чтобы сохранить результаты игры</h5>
            </>
          )}
        </div>
        </>)
         : null)}
    </>
  )
}
