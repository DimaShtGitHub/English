import axios from 'axios'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect, useState } from 'react'
import style from './TestGame.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { unstable_composeClasses } from '@mui/material';
import {useSelector} from 'react-redux';
import styles from './TestGame.module.css'


export default function TestGame() {
  console.count('test game')
  
  const {id} = useParams() 
  const user = useSelector((state)=>state.user)
  const [count, setCount] = useState(0)
  const sound = useSelector((state) => state.sound)
   //массивы для бэка
   const [stat, setStat] = useState({arrtrue: [], arrfalse:[]})
   const [allword, setAllWord] =useState([])
   const navigate = useNavigate();
   const [res, setRes] = useState({arrtrue: [], arrfalse:[]})

  useEffect(() => {
    if(id === 'random'){
      axios.get(`http://localhost:3001/words/random`)
      .then(data => {
        //data.data массив который нужен
        setAllWord(data.data)
      })
    } else {
      axios.get(`http://localhost:3001/words/${id}`)
      .then((data) => {
        setAllWord(data.data)
      }) 
    }
  }, [])
  
  function shufle(arr) {
    let barr = [...Array(arr.length)].fill('a');
    for(let i = 0; i < barr.length; i++) {
      let rand  = Math.floor(Math.random() * arr.length)
      if(barr[rand] !== 'a') {
        let num = barr.indexOf('a')
        barr[num] = arr[i]
      } else{
        barr[rand] = arr[i]
      }}
    return barr
  }

  let arrRandom;
    if(allword.length> 1 && count <= allword.length ) {
    const wordOnBut = allword.map(el => el.wordEnglish)
 const filterArr = wordOnBut.filter(el => el !== allword[count]?.wordEnglish)
 let arrRandom2 = shufle(filterArr).slice(0, 3)
 arrRandom2.push(allword[count]?.wordEnglish)
 arrRandom = shufle(arrRandom2)
    }

const click = (event) => {
  setCount(count+1)
if(event.target.value === allword[count].wordEnglish)  {
  setStat((prev) => ({...prev, arrtrue: [...stat.arrtrue,  allword[count].id]}))
  talk(`Yes, ${allword[count].wordEnglish}`)
  setRes((prev) => ({...prev, arrtrue: [...res.arrtrue,  allword[count].wordEnglish]}))
} else {
  setStat((prev) => ({...prev, arrfalse: [...stat.arrfalse,  allword[count].id]}))
  setRes((prev) => ({...prev, arrfalse: [...res.arrfalse,  allword[count].wordEnglish]}))
  talk('No')
}}

  const talk = (str) => {
    if (sound) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(str);
     synth.speak(utterThis);
    }
}

if (count !== 0 && count === allword.length && user.name) {
  axios.post('http://localhost:3001/statistic', {stat}, {withCredentials: true})
}

console.log(res)

  return (
    <>
    { allword[count] ? (
      <>
      <div className={styles.Home}>
      <img className={style.Img} src={allword[count].img} alt='pic'/>
      <div><ButtonGroup className={style.Btn}>
              {arrRandom?.map((el, index) => 
                <Button 
                  key={index}
                  value={el} 
                  onClick={(e)=>click(e)}>{el}
                </Button>
              )}
            </ButtonGroup></div>
      </div>
      </>
    ):(
      <>
       <div className={styles.Home}>
      <h3 className={styles.Stat}>Игра окончена</h3>
      {stat.arrtrue?.length > 0 ? (
  <>
   <h3 >Молодец, правильных ответов: {res.arrtrue.length}</h3>

        <div>правильные ответы: {res.arrtrue.map((el, i)=> {
          return <Button onClick={() => talk(el)} value={el} key={i}>{el}</Button>
        })}</div></>
) : (
  <h3 >Правильных ответов нет</h3>
)}
{stat.arrfalse.length > 0 ? (
   <div>неправильные ответы: {res.arrfalse.map((el, i) => {
          return <Button value={el} onClick={() => talk(el)} key={i}>{el}</Button>
        })}</div>
):(null)}
      <div>
     <Button variant="text" onClick={() => {navigate("/card", { replace: true })}} type="submit">Вернуться к выбору темы</Button>
         </div></div>
      </>
    )}

    </>
  )
}

