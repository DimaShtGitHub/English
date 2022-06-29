import * as React from 'react';
import { useEffect } from 'react';
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
import style from './NavBar.module.css'

import a_img from '../../assets/headerIcons/a.png'
import login_img from '../../assets/headerIcons/login.png'
import logout_img from '../../assets/headerIcons/logout.png'
import game_img from '../../assets/headerIcons/game-console.png'
import colored_img from '../../assets/headerIcons/colored-pencils.png'
import words_img from '../../assets/headerIcons/scrabble.png'
import dictonary_img from '../../assets/headerIcons/international-childrens-day.png'
import logo_img from '../../assets/headerIcons/youngenlish.png'
import reg_img from '../../assets/headerIcons/patient.png'
import lk_img from '../../assets/headerIcons/lk.png'
import sound_img from '../../assets/headerIcons/song.png'
import person_img from '../../assets/headerIcons/free-icon-user-7182164.png'
 


export default function ButtonAppBar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)
  const sound = useSelector((state) => state.sound)
  const dispatch = useDispatch()


  useEffect(() => {
    // localStorage.clear()
    if ('volume' in localStorage) {
      if (localStorage.volume === 'on') {
        dispatch({ type: 'SET_SOUND', payload: true })
      } else {
        dispatch({ type: 'SET_SOUND', payload: false })
      }
    } else {
      localStorage.setItem('volume', 'on')
      dispatch({ type: 'SET_SOUND', payload: true })
    } 
   }, [])

  const logHandler = (event) => {
    if (user.name) {
      axios.get('http://localhost:3001/auth/logout', {
        withCredentials: true,
      })
        .then((response) => {
          dispatch({ type: 'SET_USER', payload: {} })
          localStorage.clear()
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
    if (localStorage.volume === 'on') {
      localStorage.volume = 'off'
      dispatch({ type: 'SET_SOUND', payload: false })
    } else {
      localStorage.volume = 'on'
      dispatch({ type: 'SET_SOUND', payload: true })
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="menu-bar" position="static" >
        <Toolbar className="menu-bar" sx={{ backgroundImage: `url('https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_animalcrossingnewhorizons/NSwitch_AnimalCrossingNewHorizons_bg_leaves_green.jpg')`}} >
          <PopupState variant="popover" popupId="demo-popup-menu" >
            {(popupState) => (
              <React.Fragment >
                <Button  variant="contained"  {...bindTrigger(popupState)} sx={{backgroundColor: '#27e3c2', border: '2px solid black' }}>
                <h5 className={style.gameSelect}>Играть</h5>
                <img className={style.iconsHeder} src={game_img}  alt="game img" />               
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/coloring" >Раскраска <img className={style.iconsHeder} src={colored_img} alt="colored-pencils" /></Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/words">Буква <img className={style.iconsHeder} src={a_img} alt="letter" /></Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/card">Слово <img className={style.iconsHeder} src={words_img} alt="words" /></Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/sound">Звуки <img className={style.iconsHeder} src={sound_img} alt="sound" /></Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/dictionary">Словарь <img className={style.iconsHeder} src={dictonary_img} alt="dictonary" /></Link></MenuItem>

                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          {sound ? <VolumeUpIcon className="volUp" onClick={soundHandler}/> : <VolumeDownIcon className="volDown" onClick={soundHandler}/>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="logo-link" to="/">
              <div className='logo'>
                
                <img className={style.mainImg} src={logo_img} alt="logo" />
               
              </div>
            </Link>
          </Typography>
          <Button onClick={regHandler} color="inherit">{user.name ? <div> <img className={style.iconsHeder} src={person_img} alt="person"/><p className={style.Menu}>{user.name}</p></div> : <div> <img className={style.iconsHeder} src={reg_img} alt="reg"/> <p className={style.Menu}>Регистрация</p></div>}</Button>
          <Button onClick={LkHandler} color="inherit">{user.name ? <div> <img className={style.iconsHeder} src={lk_img} alt="lk" /> <p className={style.Menu}>Личный кабинет</p></div> : null}</Button>
          <Button onClick={logHandler} color="inherit">{user.name ? <div> <img className={style.iconsHeder} src={logout_img} alt="logout" /><p className={style.Menu}>выйти</p> </div>  : <div> <img className={style.iconsHeder} src={login_img} alt="login" /> <p className={style.Menu}>войти</p></div>}</Button>
        </Toolbar>
      </AppBar>
    </Box>

  );
}
