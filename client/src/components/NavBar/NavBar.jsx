import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';


export default function NavBar() {
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch()

  const logoutHandler = (event) => {
    axios.get('http://localhost:3001/auth/logout', {
      withCredentials: true,
    })
    .then((response) => {
      dispatch({type: 'SET_USER', payload: {}})
    })
    localStorage.clear()
  }

  return (
  <>
    <nav>
      <Link className="nav-link" to={`${user.name ? '/' : '/auth/reg' }`}>{user.name ? user.name : 'registration' }</Link>
      {user.name ? <Link className="nav-link" to={'/auth/reg'} onClick={logoutHandler}>logout</Link> : <Link to={'/auth/login'}>login</Link>}
    </nav>
  </>
  )
}
