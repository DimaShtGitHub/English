import React from 'react'
import styles from './OneWord.module.css'


export default function OneWord({ word }) {
  return (
    <>
<div className='container'>
<img src={word.img} class="d-block w-10" alt="..." />
<h2>{word.wordEnglish}, {word.wordRussian}</h2>
</div>
</>
  )
}
