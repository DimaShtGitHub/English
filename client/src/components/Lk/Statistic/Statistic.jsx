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

<Card className={styles.Card} onClick={() => {talk(word['Word.wordEnglish'])}}>
      <CardActionArea className={styles.Area}>
        <img className={styles.Img}
          src={word['Word.img']}
          alt={word['Word.img'].slice(5)}
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="div">
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
