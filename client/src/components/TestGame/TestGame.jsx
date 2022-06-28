import axios from 'axios'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect, useState } from 'react'
import style from './TestGame.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from './TestGame.module.css'
import Ansew from '../SoundGame/Ansew/Ansew';


export default function TestGame() {
  
  const {id} = useParams() 
  const user = useSelector((state)=>state.user)
  const [count, setCount] = useState(0)
  const sound = useSelector((state) => state.sound)
   //массивы для бэка
   const [stat, setStat] = useState({arrtrue: [], arrfalse:[]})
   const [allword, setAllWord] =useState([])
   const navigate = useNavigate();
   const [res, setRes] = useState({arrtrue: [], arrfalse:[]})
   const [arRandom, setArRandom] = useState([])
   const [ansew, setAnsew] = useState(0)
   const [statusStat, setStatusStat] = useState(0)


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

  useEffect(() => {
    let arrRandom;
    if(allword.length > 1 && count === 0) {
    const wordOnBut = allword.map(el => el.wordEnglish)
 const filterArr = wordOnBut.filter(el => el !== allword[count]?.wordEnglish)
 let arrRandom2 = shufle(filterArr).slice(0, 3)
 arrRandom2.push(allword[count]?.wordEnglish)
 arrRandom = shufle(arrRandom2)
 setArRandom(arrRandom)
    }
  }, [allword])
  
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

//   let arrRandom;
//     if(allword.length> 1 && count <= allword.length ) {
//     const wordOnBut = allword.map(el => el.wordEnglish)
//  const filterArr = wordOnBut.filter(el => el !== allword[count]?.wordEnglish)
//  let arrRandom2 = shufle(filterArr).slice(0, 3)
//  arrRandom2.push(allword[count]?.wordEnglish)
//  arrRandom = shufle(arrRandom2)
//     }

const click = (event) => {
  setCount(count+1)
  let arrRandom;
    if(allword.length > 1 && count < allword.length ) {
const wordOnBut = allword.map(el => el.wordEnglish)
 const filterArr = wordOnBut.filter(el => el !== allword[count+1]?.wordEnglish)
 let arrRandom2 = shufle(filterArr).slice(0, 3)
 arrRandom2.push(allword[count+1]?.wordEnglish)
 arrRandom = shufle(arrRandom2)
 setArRandom(arrRandom)
    }
if(event.target.value === allword[count].wordEnglish)  {
  setStat((prev) => ({...prev, arrtrue: [...stat.arrtrue,  allword[count].id]}))
  talk(`Yes, ${allword[count].wordEnglish}`)
  setRes((prev) => ({...prev, arrtrue: [...res.arrtrue,  allword[count].wordEnglish]}))
  setAnsew(1)
} else {
  setStat((prev) => ({...prev, arrfalse: [...stat.arrfalse,  allword[count].id]}))
  setRes((prev) => ({...prev, arrfalse: [...res.arrfalse,  allword[count].wordEnglish]}))
  talk('No')
  setAnsew(2)
}
setTimeout(()=> {
  setAnsew(0)
}, 700)
}

  const talk = (str) => {
    if (sound) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(str);
     synth.speak(utterThis);
    }
}

if (count !== 0 && count === allword.length && user.name && statusStat === 0) {
  console.count(111)
  setStatusStat(1)
  axios.post('http://localhost:3001/statistic', {stat}, {withCredentials: true})
}

  return (
    <>
    { allword[count] ? (
      <>
      <div className={styles.Home}>
      <h4 className={styles.Stat1}>Задание {count+1} из {allword.length}</h4>
      <img className={style.Img} src={allword[count].img} alt='pic'/>
      <div><ButtonGroup className={style.Btn}>
              {arRandom?.map((el, index) => 
                <Button 
                  key={index}
                  value={el} 
                  onClick={(e)=>click(e)}>{el}
                </Button>
              )}
            </ButtonGroup>
            <Ansew ansew={ansew} />
            </div>
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
     {user.name ? (null):(
            <>
            <h5> 
             <span color='green' onClick={() => {navigate("/auth/reg", { replace: true })}}>Зарегестрируйся </span>  или 
             <span onClick={() => {navigate("/auth/login", { replace: true })}}> войди</span> , чтобы сохранить результаты игры</h5>
            </>
          )}
         </div></div>
      </>
    )}

    </>
  )
}

