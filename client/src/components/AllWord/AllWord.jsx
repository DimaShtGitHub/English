import React, { useEffect, useState } from 'react'
import styles from './AllWord.module.css'
import axios from 'axios';
import OneWord from './OneWord/OneWord';

export default function AllWord() {

  const [allWord, setAllWord] = useState();

  useEffect(()=> {
      axios.get('http://localhost:3001/word/all')
      .then((data) => setAllWord(data.data))
  }, [])

  return (
    <>
      { allWord  ? (
      <div> 
        {allWord?.map(el => <OneWord word={el} key={el.id}/>)}
      </div>
      ) : (
      null
      )}
      
    </>   
  )
}

