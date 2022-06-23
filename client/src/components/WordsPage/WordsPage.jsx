import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OneCardWord from './OneCardWord/OneCardWord';
import Container from '@mui/material/Container';

export default function WordsPage() {

  const [arrCard, setArrCard] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3001/topic/words')
    .then((data) => setArrCard(data.data))
}, [])

  return (
    <>
    {arrCard.length > 0 ? (
        <div>
        <Container fixed >
        {arrCard?.map(el => <OneCardWord  topic={el} key={el.id}/>)}
          </Container> </div>
    ):(<div>nooo</div>)}
    
    </>
  )
}
