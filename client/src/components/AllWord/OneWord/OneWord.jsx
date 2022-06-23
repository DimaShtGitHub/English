import React from 'react'
import styles from './OneWord.module.css'

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


export default function OneWord({ word }) {
  const talk = () => {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(word.wordEnglish);
     synth.speak(utterThis);
}


  return (
    <>
             <TableRow
              key={word.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell   component="th" scope="row" align="center">
               <button onClick={talk}> {word.wordEnglish}</button>
              </TableCell>
              <TableCell align="center">{word.wordRussian}</TableCell>
            </TableRow>    
</>
  )
}
