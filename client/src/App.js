import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import {/*useSelector,*/ useDispatch} from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import Reg from './components/Reg/Reg';
import Login from './components/Login/Login';

import {getUser} from './redux/actions/userAC'

function App() {
  const dispatch = useDispatch()
  // const user = useSelector((state)=>state.user)


  useEffect(() => {
    dispatch(getUser())
   }, [])

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/auth/reg" element={<Reg />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
