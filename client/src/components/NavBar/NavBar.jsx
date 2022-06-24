import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


export default function ButtonAppBar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)
  const sound = useSelector((state) => state.sound)
  const dispatch = useDispatch()

  const logHandler = (event) => {
    if (user.name) {
      axios.get('http://localhost:3001/auth/logout', {
        withCredentials: true,
      })
        .then((response) => {
          dispatch({ type: 'SET_USER', payload: {} })
          navigate("/", { replace: true })
        })
    } else {
      navigate("/auth/login", { replace: true })
    }
  }

  const regHandler = (event) => {
    user.name ? navigate("/", { replace: true }) : navigate("/auth/reg", { replace: true })
  }

  const LkHandler = (event) => {
   if(user.name) navigate("/lk", { replace: true })
  }
  // const cardsHandler= (event) => {
  //   popupState.close()
  //   navigate("/", { replace: true })
  // }

  const soundHandler = (event) => {
    dispatch({ type: 'SET_SOUND', payload: !sound })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="menu-bar" position="static">
        <Toolbar className="menu-bar">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  Game
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/coloring">Coloring</Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/words">Words</Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/card">Card</Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/dictionary">Dictionary</Link></MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          {sound ? <VolumeUpIcon className="volUp" onClick={soundHandler}/> : <VolumeDownIcon className="volDown" onClick={soundHandler}/>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="logo-link" to="/">EnglishYoung</Link>
          </Typography>
          <Button onClick={regHandler} color="inherit">{user.name ? user.name : 'Регистрация'}</Button>
          <Button onClick={logHandler} color="inherit">{user.name ? 'Выйти' : 'Войти'}</Button>
          <Button onClick={LkHandler} color="inherit">{user.name ? 'Личный кабинет' : null}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
