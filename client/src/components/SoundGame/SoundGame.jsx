import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from './SoundGame.module.css'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Ansew from './Ansew/Ansew';

export default function SoundGame() {


  const {id} = useParams() 
   const user = useSelector((state)=>state.user)
   const [count, setCount] = useState(0)
   //массивы для бэка
   const [stat, setStat] = useState({arrtrue: [], arrfalse:[]})
   const [allword, setAllWord] =useState([])
   const sound = useSelector((state) => state.sound)
   const navigate = useNavigate();
   const [res, setRes] = useState({arrtrue: [], arrfalse:[]})
   const [ansew, setAnsew] = useState(0)
   const [val, setValue] = useState(true)
  const [aRandom, setARandom] = useState([])
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
  if(allword?.length >1 && count === 0) {
  const wordOnBut = allword.map(el => el.img)
const filterArr = wordOnBut.filter(el => el !== allword[count]?.img)
let arrRandom2 = shufle(filterArr).slice(0, 2)
arrRandom2.push(allword[count]?.img)
arrRandom = shufle(arrRandom2)
 setARandom(arrRandom)
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



  const talk = (str) => {
    if (sound && val === true) {
      setTimeout(() => {
       const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(str);
     synth.speak(utterThis);   
      }, 200)
    }
}


const click = (event) => {
 
  let arrRandom;
  if(allword.length> 1 && count <= allword.length ) {
  const wordOnBut = allword.map(el => el.img)
  const filterArr = wordOnBut.filter(el => el !== allword[count+1]?.img)
let arrRandom2 = shufle(filterArr).slice(0, 2)
arrRandom2.push(allword[count+1]?.img)
arrRandom = shufle(arrRandom2)
setARandom(arrRandom)
 setCount(count+1)
  }
  if(event.target.value === allword[count].img || event.target.parentNode.value === allword[count].img )  {
    setStat((prev) => ({...prev, arrtrue: [...stat.arrtrue,  allword[count].id]}))
    setRes((prev) => ({...prev, arrtrue: [...res.arrtrue,  allword[count].wordEnglish]}))
  setAnsew(1);
  setTimeout(()=> {
  setAnsew(0)
  setValue(true)
 }, 500)
 setValue(false)
  } else {
    setStat((prev) => ({...prev, arrfalse: [...stat.arrfalse,  allword[count].id]}))
    setRes((prev) => ({...prev, arrfalse: [...res.arrfalse,  allword[count].wordEnglish]}))
    setAnsew(2);
    setTimeout(()=> {
      setAnsew(0)
      setValue(true)
       }, 500)
       setValue(false)
  }
}



if (statusStat === 0 && count !== 0 && count === allword.length && user.name) {
  setStatusStat(1)
 axios.post('http://localhost:3001/statistic', {stat}, {withCredentials: true})
}


  return (
    <>
    { allword[count] ? (
        <>
        <div className={styles.Home}>
          <h4 className={styles.Stat}>Задание {count+1} из {allword.length}</h4>
       <h3   onClick= {talk(allword[count].wordEnglish)}>{allword[count].wordEnglish}</h3>
        <VolumeUpIcon className={styles.Volume} onClick={() => sound ? talk(allword[count].wordEnglish) : null}/>
        <div><ButtonGroup >
        {aRandom?.map((el, index) => 
          <Button 
          key={index}
          value={el} 
          onClick={(e)=>click(e)}
          >
             <img className={styles.Img} src={el} alt={el} />
          </Button>
        )}
      </ButtonGroup></div>
        <Ansew ansew={ansew} />
      </div>
       </> 
      ) : (
        <>
        <div className={styles.Home}>
       <h3 className={styles.Stat1}>Игра окончена</h3>
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
      <Button variant="text" onClick={() => {navigate("/sound", { replace: true })}} type="submit">Вернуться к выбору темы</Button>
          </div>
          {user.name ? (null):(
            <>
            <h5> 
             <span color='green' onClick={() => {navigate("/auth/reg", { replace: true })}}>Зарегестрируйся </span>  или 
             <span onClick={() => {navigate("/auth/login", { replace: true })}}> войди</span> , чтобы сохранить результаты игры</h5>
            </>
          )}
          </div>
       </>
        )}
        </>
    
  )
}


