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
import style from './NavBar.module.css'

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
      <AppBar className="menu-bar" position="static" >
        <Toolbar className="menu-bar" sx={{ backgroundImage: `url('https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_animalcrossingnewhorizons/NSwitch_AnimalCrossingNewHorizons_bg_leaves_green.jpg')`}} >
          <PopupState variant="popover" popupId="demo-popup-menu" >
            {(popupState) => (
              <React.Fragment >
                <Button className={style.Btn} variant="contained"  {...bindTrigger(popupState)} sx={{backgroundColor: '#27e3c2', border: '2px solid black', fontFamily: 'OpenDyslexic'}}>
                <h5>Играть</h5>
                <img className={style.iconsHeder} src="img/headerIcons/game-console.png" alt="game" />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/coloring" >Раскраска <img className={style.iconsHeder} src="img/headerIcons/colored-pencils.png" alt="colored-pencils" /></Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/words">Буква <img className={style.iconsHeder} src="img/headerIcons/a.png" alt="letter" /></Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/card">Слово <img className={style.iconsHeder} src="img/headerIcons/scrabble.png" alt="words" /></Link></MenuItem>
                  <MenuItem onClick={popupState.close}><Link className="menu-link" to="/dictionary">Словарь <img className={style.iconsHeder} src="img/headerIcons/international-childrens-day.png" alt="dictonary" /></Link></MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          {sound ? <VolumeUpIcon className="volUp" onClick={soundHandler}/> : <VolumeDownIcon className="volDown" onClick={soundHandler}/>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="logo-link" to="/">
              <div className='logo'>
                <h3>
                English
                <img className={style.mainImg} style={{width: 80}} src="img/headerIcons/free-icon-learning-4615290.png" alt="aa" />
                Young
                </h3>
              </div>
            </Link>
          </Typography>
          <Button onClick={regHandler} color="inherit">{user.name ? user.name : 'Регистрация'}</Button>
          <Button onClick={logHandler} color="inherit">{user.name ? <>выйти <img className={style.iconsHeder} src="img/headerIcons/logout.png" alt="logout" /></>  : <>войти <img className={style.iconsHeder} src="img/headerIcons/login.png" alt="login" /></>}</Button>
          <Button onClick={LkHandler} color="inherit">{user.name ? <> Личный кабинет <img className={style.iconsHeder} src="img/headerIcons/lk.png" alt="lk" /></> : null}</Button>
        </Toolbar>
      </AppBar>
    </Box>

  );
}
