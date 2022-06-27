import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import Reg from './components/Reg/Reg';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Coloring from './components/Coloring/Coloring';
import Card from './components/Card/Card';
import WordsPage from './components/WordsPage/WordsPage';
import OneWords from './components/WordsPage/OneWords/OneWords'
import AllWord from './components/AllWord/AllWord';
import Lk from './components/Lk/Lk';
import CardOnSound from './components/CardOnSound/CardOnSound'
import {getUser} from './redux/actions/userAC'
import TestGame from './components/TestGame/TestGame';
import SoundGame from './components/SoundGame/SoundGame';


function App() {
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user)


  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/card' element={<Card />} />
          <Route path='/dictionary' element={<AllWord />} />
          <Route path='/coloring' element={<Coloring />} />
          <Route path="/words" element={<WordsPage />} />
          <Route path="/words/:id" element={<OneWords />} />
          <Route path="/card/:id" element={<TestGame />} />
          <Route path="/auth/reg" element={<Reg />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path='/sound/' element={<CardOnSound />} />  
          <Route path='/sound/:id' element={<SoundGame />} />  
          <Route path='/lk' element={<Lk />} />
        </Routes>
    </div>
  );
}

export default App;
