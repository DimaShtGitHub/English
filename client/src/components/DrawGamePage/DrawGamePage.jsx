import React from 'react'
import './style.css'

export default function DrawGamePage() {

  return (
    <div className='drawGame_container'>
      DrawGamePage
      <div className='color_select'>
        <p>pink</p>
      </div>
      <div className='color_select'>
        <p>green</p>
      </div>
      <div className='color_select'>
        <p>red</p>
      </div>
      <div className='color_select'>
        <p>blue</p>
      </div>
      <div onClick={() => console.log(555)} className='color_select'>
        <p>black</p>
      </div>

      <div className='palitra'>
        <div className="palitra_color">
          <button>ok</button>
        </div>
        <div className="palitra_color"><button className='col_btn'>ok</button></div>
        <div className="palitra_color"><button>ok</button></div>
        <div className="palitra_color"><button>ok</button></div>
        <div className="palitra_color"><button>ok</button></div>
        <div className="palitra_color"><button>ok</button></div>
      </div>
    </div>
  )
}

