import React from 'react'
import styles from './OneCardWord.module.css'
import { useNavigate } from 'react-router-dom' 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function OneCardWord({ topic }) {

  const navigate = useNavigate(); 
  
  return (
    <>
    <Card className={styles.Card} onClick={()=> navigate(`/words/${topic.id}`, {replace: true})}>
    <CardActionArea className={styles.Area}>
      <img className={styles.Img}
         src={topic['TopicImg.img']}
         alt={'загрузка'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {topic.title}
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
</>
  )
}
