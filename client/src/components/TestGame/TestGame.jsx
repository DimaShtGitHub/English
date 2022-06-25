import axios from 'axios'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect, useState } from 'react'
import style from './TestGame.module.css'
import { useParams } from 'react-router-dom';

export default function TestGame() {
  const [allWords, setAllWords] = useState([])

  const [fourW, setFourW] = useState([])
  const [count, setCount] = useState(0)
  const [image, setImage] = useState()
  const [trueW, setTrueW] = useState({title: '', id: 0})
  const [points, setPoint] = useState([0])
  const [lengthGame, setLengthGame] = useState()

  const [stat, setStat] = useState({arrtrue: [], arrfalse: []})
  const {id} = useParams()
  
  useEffect(() => {

    if(id === 'random'){
      axios.get(`http://localhost:3001/words/random`)
      .then(data => {
        setAllWords(data.data)
        
        setLengthGame(data.data.length);
        
        // let trueWord = data.data[count]
  
        // if(count !== lengthGame){
        //   const fourWord = data.data.filter((el) => el.wordEnglish !== trueWord.wordEnglish);
        //   const arreyName = shufle(fourWord)
        //   arreyName.push(trueWord)
          
        //   setFourW(shufle(arreyName.slice(-4)))
        //   setImage(trueWord.img)
        //   setTrueW({
        //     title: trueWord.wordEnglish, 
        //     id: trueWord.id
        //   })
        // }

        })
    } else {
      // axios.get(`http://localhost:3001/words/${id}`)
      //   .then((data) => {
      //     setLengthGame(data.data.words.length)
      //     let trueWord = data.data.words[count]
      //     if(count !== lengthGame) {
      //       let fourWord = data.data.words.filter((el) => el['Words.wordEnglish'] !== trueWord['Words.wordEnglish']);
      //       const arreyName = shufle(fourWord)
      //       arreyName.push(trueWord)

      //       setFourW(shufle(arreyName.slice(-4)))
      //       setImage(trueWord['Words.img'])
      //       setTrueW({
      //         title: trueWord['Words.wordEnglish'], 
      //         id: trueWord['Words.id']
      //       })
      //     }   
      //   })  
      // setImage(allWords[count].img)
    }
  }, [])
  
  console.log(allWords, 'ALLL');

  // useEffect(() => {
    
  //     let trueWord = allWords[count]
  //     setTrueW(allWords[count])
  //     console.log(trueW);
  //     const fourWord = allWords.filter((el) => el.wordEnglish !== trueWord.wordEnglish);
  //     const arreyName = shufle(fourWord)
  //     arreyName.push(trueWord)
  
  //     setFourW(shufle(arreyName.slice(-4)))
  //     //   setImage(trueWord['Words.img'])
  //     //   setTrueW({
  //       //     title: trueWord.wordEnglish, 
  //       //     id: trueWord.id
  //       //   })
      
  //   }, [])
    console.log(fourW);


  const submitPage = (event) => {
    if (event.target.value === allWords[count]?.wordEnglish) {
      setCount((prev) => prev + 1)
      console.log(image, 'image 76');
      console.log(1234);
    } else {
      setCount((prev) => prev + 1)
    }
  }

  
  
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

  // const click = (event) => {
    
  //   if (count < lengthGame) {

  //     setCount((prev) => prev + 1)
  //     if(event.target.value === trueW.title){
  //       setPoint((prev) => Number(prev) + 1)  
  //       setStat((prev) => ({...prev, arrtrue: [...stat.arrtrue, Number(event.target.id)]}))
  //     } else {
  //       setStat((prev) => ({...prev, arrfalse: [...stat.arrfalse, trueW.id]}))
  //     }
  //   } 
  // }
  
  if (count === lengthGame) {
    console.log(stat);
    axios.post('http://localhost:3001/statistic', {stat}, {withCredentials: true})
  }

  return (
    <>
      {/* {allWords[count]  ?   
        <div >
          <img src={allWords[count].img} alt='pic'/>
            <ButtonGroup>
              {fourW?.map((el, index) => 
                <Button 
                  key={index}
                  id={el.id } 
                  value={el.wordEnglish} 
                  // onClick={(event) => click(event)}>
                  onClick={submitPage}>

                
                  {el['Words.wordEnglish'] ? el['Words.wordEnglish'] : el.wordEnglish }
                </Button>
              )}
            </ButtonGroup>
          
        </div>
        : 
        <div>
          <h2>Поздравляю, ты победил!!!</h2>
          <h4>Ты ответил на {points} вопроса  правильно</h4>
        </div>
      } */}
    </>
  )
}

