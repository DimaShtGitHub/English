import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './Statistic.module.css'
export default function Statistic( { word }) {

  const talk = (str) => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(str);
     synth.speak(utterThis);
}

  return (
    <>

<Card sx={{ Width: '25vh', Higth: '25vh' }} onClick={() => {talk(word['Word.wordEnglish'])}}>
      <CardActionArea>
        <CardMedia className={styles.img}
          component="img"
          image={word['Word.img']}
          alt={word['Word.img'].slice(5)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {word['Word.wordEnglish']}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {word['Word.wordRussian']}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
    </>
  )
}
