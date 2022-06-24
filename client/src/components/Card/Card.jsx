import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OneCard from './OneCard/OneCard';
import styles from './Card.module.css'
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom' 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards() {
   const navigate = useNavigate(); 
  const [arrCard, setArrCard] = useState();

  useEffect(()=> {
      axios.get('http://localhost:3001/topic/card')
      .then((data) => setArrCard(data.data))
  }, [])

  return (
    <div className={styles.Home}>
    <Container fixed className={styles.Container}>
      {arrCard?.map(el => <OneCard topic={el} key={el.id}/>)}

      <Card sx={{ width: '250px'}} className={styles.Card} onClick={()=> navigate(`/card/random`, {replace: true})}>
      <CardActionArea >
        <CardMedia className={styles.img}
          component="img"
          variant="quilted"
           image='/img/Tree.png'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Random
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      </Container> </div>
  )
}
