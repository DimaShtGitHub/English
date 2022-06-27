import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from './SoundGame.module.css'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


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
  const wordOnBut = allword.map(el => el.img)
const filterArr = wordOnBut.filter(el => el !== allword[count]?.img)
let arrRandom2 = shufle(filterArr).slice(0, 2)
arrRandom2.push(allword[count]?.img)
arrRandom = shufle(arrRandom2)
  }


  const talk = (str) => {
    if (sound) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(str);
     synth.speak(utterThis);
    }
}


const click = (event) => {
  setCount(count+1)
  if(event.target.value === allword[count].img || event.target.parentNode.value === allword[count].img )  {
    setStat((prev) => ({...prev, arrtrue: [...stat.arrtrue,  allword[count].id]}))
    setRes((prev) => ({...prev, arrtrue: [...res.arrtrue,  allword[count].wordEnglish]}))
 setAnsew(1) ;
  } else {
    setStat((prev) => ({...prev, arrfalse: [...stat.arrfalse,  allword[count].id]}))
    setRes((prev) => ({...prev, arrfalse: [...res.arrfalse,  allword[count].wordEnglish]}))
    setAnsew(2) ;
  }
}

if (count !== 0 && count === allword.length && user.name) {
 axios.post('http://localhost:3001/statistic', {stat}, {withCredentials: true})
}


  return (
    <>
    { allword[count] ? (
      ansew === 1 ? (
        <>
        <div className={styles.Home}>
          <h4 className={styles.Stat}>Задание {count+1} из {allword.length}</h4>
          <img src="/img/Ok.png" alt="Ok.png" className={styles.Ok1}/>
        <h3   onClick= {talk(allword[count].wordEnglish)}>{allword[count].wordEnglish}</h3>
        <VolumeUpIcon className={styles.Volume} onClick={() => sound ? talk(allword[count].wordEnglish) : null}/>
        <div><ButtonGroup >
        {arrRandom?.map((el, index) => 
          <Button 
            key={index}
            value={el} 
            onClick={(e)=>click(e)}
            >
             <img className={styles.Img} src={el} alt={el} />
          </Button>
        )}
      </ButtonGroup></div>
      </div>
       </> 
      ) : (ansew === 2 ? (
        <>
        <div className={styles.Home}>
          <h4 className={styles.Stat}>Задание {count+1} из {allword.length}</h4>
          <img src="/img/Error.png" alt="Error.png" className={styles.Ok1}/>
        <h3  onClick= {talk(allword[count].wordEnglish)}>{allword[count].wordEnglish}</h3>
        <VolumeUpIcon className={styles.Volume} onClick={() => sound ? talk(allword[count].wordEnglish) : null}/>
        <div><ButtonGroup >
        {arrRandom?.map((el, index) => 
          <Button 
            key={index}
            value={el} 
            onClick={(e)=>click(e)}
            >
             <img className={styles.Img} src={el} alt={el} />
          </Button>
        )}
      </ButtonGroup></div>
      </div>
       </> 

      ) : (
             <>
      <div className={styles.Home}>
      <h4 className={styles.Stat}>Задание {count+1} из {allword.length}</h4>
      <img src="/img/Ok.png" alt="Ok.png" className={styles.Ok}/>
      <h3  onClick= {talk(allword[count].wordEnglish)}>{allword[count].wordEnglish}</h3>
      <VolumeUpIcon className={styles.Volume} onClick={() => sound ? talk(allword[count].wordEnglish) : null}/>
      <div><ButtonGroup >
      {arrRandom?.map((el, index) => 
        <Button 
          key={index}
          value={el} 
          onClick={(e)=>click(e)}
          >
           <img className={styles.Img} src={el} alt={el} />
        </Button>
      )}
    </ButtonGroup></div>
    </div>
     </> 
      )
     
      )
   
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
          </div></div>
       </>
        )}
        </>
    
  )
}
