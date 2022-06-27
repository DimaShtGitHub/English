import React from 'react'
import styles from './Ansew.module.css'


export default function Ansew( {ansew}) {




  return (
    <>
    {ansew === 1 ? (
    <div>
         <img src="/img/Ok.png" alt="Ok.png" className={styles.Ok1}/>
    </div>   
    ) : (
      ansew === 2 ? (
      <div>
          <img src="/img/Error.png" alt="Error.png" className={styles.Ok1}/>
      </div>  
      ) : (
        null
      )
    )}
</>
  )
}
