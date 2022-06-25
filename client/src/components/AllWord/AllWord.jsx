import React, { useEffect, useState } from 'react'
import styles from './AllWord.module.css'
import axios from 'axios';
import OneWord from './OneWord/OneWord';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function AllWord() {

  const [allWord, setAllWord] = useState();
  const [findWord, setFindWord] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/word/all')
      .then((data) => setAllWord(data.data))
  }, [])

  const findHandler = (event) => {
    event.preventDefault()
    setValue(event.target.value.length)
    if (value) {
      setFindWord(allWord.filter((el) => el.wordEnglish.split('').map(el=>el.toLowerCase()).join('').includes(event.target.value.split('').map(el=>el.toLowerCase()).join(''))  
      || el.wordRussian.split('').map(el=>el.toLowerCase()).join('').includes(event.target.value.split('').map(el=>el.toLowerCase()).join(''))))
    } else {
      setFindWord([])
    }
  }

  return (
    <>
      <Box onChange={findHandler}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="введите слово для поиска" variant="outlined" />
      </Box>

      {findWord.length ?

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <OneWord word={findWord[0]}/>
          </TableBody>
        </Table> 

        : (value ? <div>🤷‍♂️ такого слова не найдено 🤷‍♂️</div> : null) }
      
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
            {allWord?.map(el => <OneWord word={el} key={el.id} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

