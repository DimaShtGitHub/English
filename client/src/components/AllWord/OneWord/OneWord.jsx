import React from 'react'
import { useSelector } from 'react-redux';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function OneWord({ word }) {
  const sound = useSelector((state) => state.sound)

  const talk = () => {
    if (sound) {
      var synth = window.speechSynthesis;
      var utterThis = new SpeechSynthesisUtterance(word.wordEnglish);
       synth.speak(utterThis);
    }
}


  return (
    <>
      <TableRow
      key={word?.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row" align="center"><VolumeUpIcon onClick={talk}/></TableCell>
        <TableCell  component="th" scope="row" align="center">
         {word?.wordEnglish}
        </TableCell>
        <TableCell align="center">{word?.wordRussian}</TableCell>
        <TableCell align="center"  component="th" scope="row">
        <img alt="Remy Sharp" src={word?.img} style={{height: 60}}/></TableCell>
      </TableRow>    
    </>
  
  )
}
