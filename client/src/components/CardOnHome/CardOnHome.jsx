import React from 'react'
import styles from './CardOnHome.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom' 
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


export default function CardOnHome() {

  const talk = (str) => {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(str);
     synth.speak(utterThis);
}

  const navigate = useNavigate(); 
  return (
    <>
    <Container  className={styles.Container}>
    <Card  className={styles.Card} >
      <CardActionArea className={styles.Area} onClick={()=> navigate('/coloring', {replace: true})}>
        <img className={styles.Img}
          src="/img/Coloring.png"
          alt='Coloring.png'
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
          <VolumeUpIcon onClick={()=>talk('Тут можно раскрасить картинку')}/>
      </Card>

      <Card  className={styles.Card} >
      <CardActionArea className={styles.Area} onClick={()=> navigate('/card', {replace: true})}>
        <img className={styles.Img}
            src="/img/Card.png"
            alt='Coloring.png'
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
      <VolumeUpIcon onClick={()=>talk('В этой игре нужно будет по картинке выбрать правильное слово')}/>
    </Card>

      <Card className={styles.Card} >
      <CardActionArea className={styles.Area} onClick={()=> navigate('/words', {replace: true})}>
        <img className={styles.Img}
          src="/img/Word.png"
          alt='Word.png'
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
      <VolumeUpIcon onClick={()=>talk('В этой игре нужно будет подставлять буквы в слова с иллюстрациями')}/>
    </Card>

<Card  className={styles.Card} >
      <CardActionArea className={styles.Area} onClick={()=> navigate('/dictionary', {replace: true})}>
        <img className={styles.Img}
         src="/img/Dictionary.png"
         alt='Dictionary.png'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dictionary
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Это словарик. Тут можно посмотреть все слова
          </Typography>
        </CardContent>
      </CardActionArea>
      <VolumeUpIcon onClick={()=>talk(' Это словарик. Тут можно посмотреть все слова')}/>
      </Card>

    </Container>
    </>
  )
}
