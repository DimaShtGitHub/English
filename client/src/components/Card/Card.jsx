import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OneCard from './OneCard/OneCard';
import styles from './Card.module.css'

export default function Card() {

  const [arrCard, setArrCard] = useState();

  useEffect(()=> {
      axios.get('http://localhost:3001/topic/card')
      .then((data) => setArrCard(data.data))
  }, [])


  return (
    <div className='container' >
      {arrCard?.map(el => <OneCard topic={el} key={el.id}/>)}
      </div>
  )
}
