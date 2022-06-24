import React, { useEffect, useState } from 'react'
import styles from './AllWord.module.css'
import axios from 'axios';
import OneWord from './OneWord/OneWord';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function AllWord() {

  const [allWord, setAllWord] = useState();

  useEffect(()=> {
      axios.get('http://localhost:3001/word/all')
      .then((data) => setAllWord(data.data))
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="center">Прослушать</TableCell>
              <TableCell align="center">Английский язык</TableCell>
              <TableCell align="center">Русский язык</TableCell>
              <TableCell align="center">Изображение</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allWord?.map(el => <OneWord word={el} key={el.id}/>)}  
          </TableBody>
        </Table>
      </TableContainer>
    </>   
  )
}

