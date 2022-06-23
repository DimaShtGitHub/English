import axios from 'axios'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect, useState } from 'react'
import style from './TestGame.module.css'
import { useParams } from 'react-router-dom';

export default function TestGame() {
  const [fourW, setFourW] = useState([])
  const [count, setCount] = useState(0)
  const [image, setImage] = useState([])
  const [trueW, setTrueW] = useState({title: '', id: 0})
  const [points, setPoint] = useState([0])
  const [lengthGame, setLengthGame] = useState()
  const [result, setResult] = useState([])
  const [stat, setStat] = useState({arrtrue: [], arrfalse: []})
  const {id} = useParams()
  
  useEffect(() => {
    if(id === 'random'){
      axios.get(`http://localhost:3001/words/random`)
      .then(data => {
        setLengthGame(data.data.length)
        })
    } else {
      axios.get(`http://localhost:3001/words/${id}`)
        .then((data) => {
          setLengthGame(data.data.words.length)
          let trueWord = data.data.words[count]
          if(count !== lengthGame) {
            let fourWord = data.data.words
              .filter((el) => el['Words.wordEnglish'] !== trueWord['Words.wordEnglish']);
            
            const arreyName = shufle(fourWord)
            arreyName.push(trueWord)
            setFourW(shufle(arreyName.slice(-4)))
            setImage(trueWord['Words.img'])
            setTrueW({title: trueWord['Words.wordEnglish'], id: trueWord['Words.id']})
          }   
        }) 
    }
  }, [count])
    
  function shufle(arr) {
    let barr = [...Array(arr.length)].fill('a');
    
    for(let i = 0; i < barr.length; i++) {
      let rand  = Math.floor(Math.random() * arr.length)
      if(barr[rand] !== 'a') {
        let num = barr.indexOf('a')
        barr[num] = arr[i]
      } else{
        barr[rand] = arr[i]
      }
    }
      
    return barr
  }

  function timerResult() {
    setTimeout(() => {
      setResult('')
      setCount((prev) => prev + 1)
    }, 1000)
  }

  const click = (event) => {
    if (count < lengthGame) {
      timerResult()

      if(event.target.value === trueW.title){
        setResult('Mолодец 👍')      
        setStat((prev) => ({...prev, arrtrue: [...stat.arrtrue, Number(event.target.id)]}))
        setPoint((prev) => Number(prev) + 1)  

      } else {
        setResult('Не верно 🙁')
        setStat((prev) => ({...prev, arrfalse: [...stat.arrfalse, trueW.id]}))
      }
    } 
  }
  
  if (count === lengthGame) {
    console.log(stat);
    axios.post('http://localhost:3001/statistic', {stat}, {withCredentials: true})
  }

  return (
    <>
      {count !== lengthGame  ?   
        <div >
          <img className={style.picture} src={image} alt='pic'/>
          <h3>{result}</h3>        
            <ButtonGroup>
              {fourW?.map((el, index) => 
                <Button 
                  key={index}
                  id={el['Words.id']} 
                  value={el['Words.wordEnglish']} 
                  onClick={(event) => click(event)}>
                
                  {el['Words.wordEnglish']}
                </Button>
              )}
            </ButtonGroup>
          
        </div>
        : 
        <div>
          <h2>Поздравляю, ты победил!!!</h2>
          <h4>Ты ответил на {points} вопроса  правильно</h4>
        </div>
      }
    </>
  )
}

