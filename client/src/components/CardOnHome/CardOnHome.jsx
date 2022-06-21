import React from 'react'
import styles from './CardOnHome.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom' 

export default function CardOnHome() {

  const navigate = useNavigate(); 
  return (
    <Container fixed>
    <Card sx={{ maxWidth: '40%' }} className={styles.Card} onClick={()=> navigate('/coloring', {replace: true})}>
      <CardActionArea>
        <CardMedia
          // component="img"
         maxWidth='100px'
          image="/img/Card1.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Coloring
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Тут можно раскрасить картинку
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: '200px', minHeight: '200px' }} onClick={()=> navigate('/card', {replace: true})}>
      <CardActionArea >
        <CardMedia
          component="img"
         maxWidth='100px'
          image="/img/Card1.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
           В этой игре нужно будет по картинке выбрать правильное слово
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>

  )
}
