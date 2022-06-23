import React from 'react'

export default function Statistic( { word }) {

  return (
    <>
    <div>
      <p>{word['Word.wordEnglish']} {word['Word.wordRussian']} {word.count}</p>
      </div>
  
    </>
  )
}
