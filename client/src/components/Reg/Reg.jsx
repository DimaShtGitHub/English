import React from 'react'
import { useState } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';

export default function Reg() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  
  const [inputs, setInputs] = useState({})
  const [err, setErr] = useState({})

  const regHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/auth/reg', inputs, {
      withCredentials: true,
    })
    .then((res) => {
        setErr((prev) => ({}))
        dispatch({type: 'SET_USER', payload: res.data})
        navigate("/", { replace: true });
     })
     .catch((res) => {
      if (res.response.status === 400) {
        setErr((prev) => (res.response.data))
      } else if (res.response.status === 500) {
        setErr((prev) => (res.response.data))
      } else {
        setErr((prev) => ({message: 'сервер недоступен, попробуйте позже'}))
      }
    })
  }

  const inputsHandler = (e) => {
    e.preventDefault();
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value }))
  }



  return (
    <form onSubmit={regHandler} className="reg_log_form">
      <div><label className="reg-lable">Логин:</label></div>
      <div><input onChange={inputsHandler} name="name" className="form-control" type="text" pattern="[A-Za-z]\w+" minLength="1" placeholder="Введите логин" required></input></div>
      <div><label className="reg-lable">Email:</label></div>
      <div><input onChange={inputsHandler} name="email" className="form-control" type="text" pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$" placeholder="Введите Email" required></input></div>
      <div><label className="reg-lable">Пароль:</label></div>
      <div><input onChange={inputsHandler} name="password" className="password form-control" type="password" minLength="1" placeholder="Введите пароль" required></input></div>
      {err.message ? <div className="err-message">{err.message}</div> : null}
      <div><button type="submit" className="btn btn-primary btn-reg">Зарегистрироваться</button></div>
    </form>
  )
}
