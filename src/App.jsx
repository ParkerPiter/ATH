import { useState,useEffect } from 'react'
import Nav from './componentes/footerNav/NavFooter'

//PNGs imports
import styles from './app.module.css'
import telegram from './assets/TELEGRAM.png'
import twitter from './assets/TWITTER.png'
import meme from './assets/MEME.png'
import trash from './assets/BURN BIN.png'
import game from './assets/GAME.png'
import pc from './assets/CHART.png'
import mdos from './assets/CHAT BOT.png'
import contract from './assets/CONTRACT.png'
import rocket from './assets/ROCKET.png'
import fire from './assets/Imagen1.gif'


function App() {

  const [showRocket, setShowRocket] = useState(false);
  const [showFire, setShowFire] = useState(false);

  useEffect(() => {
    const timerRocket = setTimeout(() => {
      setShowRocket(true);
    }, 3000);
    const timerFire = setTimeout(() => {
      setShowFire(true);
    }, 3000);
    return () => {
      clearTimeout(timerRocket);
      clearTimeout(timerFire);
    };
  }, []);



  return (
    <div className={styles.container}>
      {showRocket && <img src={rocket} alt="rocket" className={styles.rocket} />}
      {showFire && <img src={fire} alt="fire" className={styles.fire} />}
      <div className={styles.containerMini}>
        <div>
          <img src={telegram} alt="#twitter" style={{ width: '80px', height: '45px' }} />
          <p>TELEGRAM</p>
        </div>
        <div>
          <img src={twitter} alt="#tele" style={{ width: '80px', height: '45px' }} />
          <p>TWITTER</p>
        </div>
      </div>
      <div className={styles.containerMini}>
        <div>
          <img src={meme} alt=""  style={{ width: '80px', height: '45px' }}/>
          <p>MEMES</p>
        </div>
        <div>
          <img src={contract} alt="" style={{ width: '85px', height: '45px' }}/>
          <p>MSDOS</p>
        </div>
      </div>
      <div className={styles.containerMini}>
        <div>
          <img src={pc} alt=""  style={{ width: '80px', height: '45px' }}/>
          <p>CHART</p>
        </div>
        <div>
          <img src={mdos} alt="" style={{ width: '80px', height: '45px' }} />
          <p>CHAT BOT</p>
        </div>
      </div>
      <div className={styles.containerMini}>
        <div>
          <img src={trash} alt=""  style={{ width: '80px', height: '45px' }}/>
          <p>TOKEN BURN</p>
        </div>
        <div>
          <img src={game} alt="" style={{ width: '80px', height: '45px' }} />
          <p>GAMES</p>
        </div>
      </div>
        {/* <Nav className={styles.Nav}></Nav> */}
    </div>
  )
}

export default App
