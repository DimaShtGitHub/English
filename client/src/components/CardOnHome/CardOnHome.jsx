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
    <>
    <Container fixed className={styles.Container}>
    <Card sx={{ width: '200px', minHeight: '200px' }} className={styles.Card} onClick={()=> navigate('/coloring', {replace: true})}>
      <CardActionArea >
        <CardMedia
          component="img"
          width='100px'
          // image="/img/Card1.png"
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

      <Card sx={{ width: '200px', minHeight: '200px' }} className={styles.Card} onClick={()=> navigate('/card', {replace: true})}>
      <CardActionArea >
        <CardMedia
          component="img"
          width='100px'
          // image="/img/Card1.png"
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

      <Card sx={{ width: '200px', minHeight: '200px' }} className={styles.Card} onClick={()=> navigate('/words', {replace: true})}>
      <CardActionArea >
        <CardMedia
          component="img"
          width='100px'
          // image="/img/Card1.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Words
          </Typography>
          <Typography variant="body2" color="text.secondary">
           В этой игре нужно будет подставлять буквы в слова с иллюстрациями
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

<Card sx={{ width: '200px', minHeight: '200px' }} className={styles.Card} onClick={()=> navigate('/allword', {replace: true})}>
      <CardActionArea >
        <CardMedia
          component="img"
          width='100px'
          // image="/img/Card1.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            All Word
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Тут можно посмотреть все слова
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>

    </Container>
    </>
  )
}
