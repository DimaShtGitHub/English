import styles from './Home.module.css'
import CardOnHome from '../CardOnHome/CardOnHome'

export default function Home() {
  return (
    <>
    <div className={styles.Home} >
      <CardOnHome />
      <img src="/img/PonyHome.png" alt="" className={styles.PonyHome1}/>
      </div>
      </>
  )
}
