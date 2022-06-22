import React from 'react'
import styles from './WordsPage.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom' 

export default function WordsPage() {

  const navigate = useNavigate(); 
  return (
    <>
    <Container fixed className={styles.Container}>
    <Card sx={{ maxWidth: '200px', minHeight: '200px' }} className={styles.Card} onClick={()=> navigate(`/words/${1}`, {replace: true})}>
      <CardActionArea >
        <CardMedia
          component="img"
          maxWidth='100px'
          // image="/img/Card1.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Animals
          </Typography>
          <Typography variant="body2" color="text.secondary">
            подставь верные буквы в названия животных
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>

    </Container>
    </>
  )
}
