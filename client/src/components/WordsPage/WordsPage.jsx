import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OneCardWord from './OneCardWord/OneCardWord';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './WordsPage.module.css'

export default function WordsPage() {

  const navigate = useNavigate();
  const [arrCard, setArrCard] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/topic/words')
      .then((data) => setArrCard(data.data))
  }, [])

  return (
    <> <div className={styles.Home}>
      {arrCard.length > 0 ? (
        <div>
          <Container className={styles.Container}>
            {arrCard?.map(el => <OneCardWord topic={el} key={el.id} />)}
            <Card className={styles.Card} onClick={() => navigate(`/words/random`, { replace: true })}>
              <CardActionArea className={styles.Area}>
                <img className={styles.Img}
                  src='/img/Tree.png'
                  alt='загрузка'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Random
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container> </div>
      ) : (<div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>)}</div>
    </>
  )
}
