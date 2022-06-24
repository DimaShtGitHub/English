import React from 'react'
import styles from './Lk.module.css'
import axios from 'axios'
import Statistic from './Statistic/Statistic'
import { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';


export default function Lk() {
const [allStatistic, setAllStatistic] = useState([])
const navigate = useNavigate();
useEffect(()=> {
  axios.get('http://localhost:3001/statistic/user', {withCredentials: true})
  .then(data => setAllStatistic(data.data))
}, [])

  return (
    <>
    <div className={styles.Home}>
        {allStatistic.length > 0 ? (
          <>
<h3>Слова, которые нужно повторить</h3>
    <div className={styles.container}> 
     {allStatistic.map(el => <Statistic key={el.id} word={el} /> )} 
      </div></>
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
