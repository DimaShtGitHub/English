import React from 'react'
import styles from './Lk.module.css'
import axios from 'axios'
import Statistic from './Statistic/Statistic'
import { useEffect, useState } from 'react'

export default function Lk() {
const [allStatistic, setAllStatistic] = useState([])

useEffect(()=> {
  axios.get('http://localhost:3001/statistic/user', {withCredentials: true})
  .then(data => setAllStatistic(data.data))
}, [])

  return (
    <>
    <div> Смена почты </div>
    <div> Смена пароля </div>
    <div><h2>Слова, которые нужно повторить</h2>
    <div className={styles.container}> 
    {allStatistic?.length > 0 ? (
      allStatistic.map(el => <Statistic key={el.id} word={el} /> )):(null)}
      </div>
      </div>
    </>
  )
}
