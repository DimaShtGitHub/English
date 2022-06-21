import React from 'react'
import styles from './OneCard.module.css'
import { useNavigate } from 'react-router-dom' 

export default function OneCard({ topic }) {

  const navigate = useNavigate(); 

  return (
    <>
 <div className="card" style={{'width': '80vh'}} onClick={()=> navigate(`/card/${topic.id}`, {replace: true})}>
  <div className="card-body">
    <h4 className="card-text">{topic.title}</h4>
  </div>
     <img src="/img/PonyHome.png" className={styles.img} alt=""/> 
</div>
   </> 
  )
}
