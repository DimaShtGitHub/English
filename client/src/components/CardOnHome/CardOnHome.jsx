import React from 'react'
import styles from './CardOnHome.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom' 
import { useSelector } from 'react-redux';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


export default function CardOnHome() {

  const sound = useSelector((state) => state.sound)

  const talk = (str) => {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(str);
     synth.speak(utterThis);
}

  const navigate = useNavigate(); 
  return (
    <>
    <Container  className={styles.Container} >
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
          <VolumeUpIcon className={styles.Volume} onClick={()=> sound ? talk('Тут можно раскрасить картинку') : alert('включите звук, кнопочка в меню')}/>
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
          </CardActionArea >
          <VolumeUpIcon className={styles.Volume} onClick={()=> sound ? talk('В этой игре нужно будет по картинке выбрать правильное слово') : null}/>
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
          <VolumeUpIcon className={styles.Volume} onClick={()=> sound ? talk('В этой игре нужно будет подставлять буквы в слова с иллюстрациями') : null}/>
        </Card>

        <Card  className={styles.Card} >
          <CardActionArea className={styles.Area} onClick={()=> navigate('/sound', {replace: true})}>
            <img className={styles.Img}
              src="/img/SoundGame.png"
              alt='SoundGame.png'
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              SoundGame
              </Typography>
              <Typography variant="body2" color="text.secondary">
                По звуку нажми на правильную картинку
              </Typography>
            </CardContent>
          </CardActionArea>
          <VolumeUpIcon className={styles.Volume} onClick={()=> sound ? talk('По звуку нажми на правильную картинку') : alert('включите звук, кнопочка в меню')}/>
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
          <VolumeUpIcon className={styles.Volume} onClick={()=> sound ? talk(' Это словарик. Тут можно посмотреть все слова') : null}/>
        </Card>
                        
      </Container>
    </>
  )
}
