import React from 'react'
import styles from './Lk.module.css'
import axios from 'axios'
import Statistic from './Statistic/Statistic'
import { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';


export default function Lk() {
const [allStatistic, setAllStatistic] = useState([])
const [allStatisticTrue, setAllStatisticTrue] = useState([])
const navigate = useNavigate();

useEffect(()=> {
  axios.get('http://localhost:3001/statistic/user', {withCredentials: true})
  .then(data => {
    console.log('false', data.data)
    setAllStatistic(data.data)})

  axios.get('http://localhost:3001/statistic/usertrue', {withCredentials: true})
  .then(data => setAllStatisticTrue(data.data))
}, [])
console.log('true', allStatisticTrue)



  return (
    <>
    <div className={styles.Home}>
        {allStatistic.length !== 0 || allStatisticTrue.length !== 0 ? (
          <>
          <div>
            {allStatisticTrue.length > 0 ? (
              <>
            <h3>Слова, которые ты знаешь</h3>
    <div className={styles.container}> 
     {allStatisticTrue.map(el => <Statistic key={el.id} word={el} /> )} 
      </div>   </>

            ):(null)}
     
              {allStatistic.length > 0 ? (
<>
<h3>Слова, которые нужно повторить</h3>
    <div className={styles.container}> 
     {allStatistic.map(el => <Statistic key={el.id} word={el} /> )} 
      </div>
</>
              ):(null)}
     </div> 
      </>
        ):(
          <>
          <h3 className={styles.hh3}>У тебя нет слов, которые нужно повторить!</h3>
          <h4  onClick={() => {navigate("/", { replace: true })}}>Пошли играть!</h4>
          <img src="/img/lk.png" alt="lk.png" className={styles.img} onClick={() => {navigate("/", { replace: true })}}/>
          </>
        )}
      </div>
    </>
  )
}
