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
    <Card sx={{ width: '250px' }} className={styles.Card} onClick={()=> navigate(`/words/${topic.id}`, {replace: true})}>
    <CardActionArea >
      <CardMedia className={styles.img}
        component="img"
        variant="quilted"
         image={topic['TopicImg.img']}
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
