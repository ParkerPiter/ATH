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
import fire from './assets/image_processing20211213-25233-1wck2hl (1).gif'
// components imports
import Alert from './componentes/alert/Alert'
import pum from './componentes/alert/pum.mp3' 

function App() {
  const [showRocket, setShowRocket] = useState(false);
  const [showFire, setShowFire] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [audio, setAudio] = useState(new Audio(pum));

  const playSound = () => {
    audio.load(); 
    audio.play();
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    const alert2 = setTimeout(() => {
      playSound(); // Reproducir el sonido
      setShowAlert2(true);
    }, 200);
  };

  const handleCloseAlert2 = () => {
    setShowAlert2(false);
  };

  const handleConfirmAction = () => {
    console.log('Acción confirmada');
    handleCloseAlert();
  };

  const buttons1 = [
    { name: 'YES', onClick: handleConfirmAction },
    { name: 'NO', onClick: handleCloseAlert },
  ];

  const buttons2 = [
    { name: 'YES', onClick: handleConfirmAction },
    { name: 'YES', onClick: handleCloseAlert2 },
  ];

  useEffect(() => {
    const timerRocket = setTimeout(() => {
      setShowRocket(true);
    }, 3000);

    const timerFire = setTimeout(() => {
      setShowFire(true);
    }, 3000);

    const timerAlert = setTimeout(() => {
      setShowAlert(true);
      playSound(); // Reproducir el sonido
    }, 7000);

    return () => {
      clearTimeout(timerRocket);
      clearTimeout(timerFire);
      clearTimeout(timerAlert);
    };
  }, [audio]);

  return (
    <div className={styles.container}>
      {showRocket && <img src={rocket} alt="rocket" className={styles.rocket} />}
      {showFire && <img src={fire} alt="fire" className={styles.fire} />}
      {showAlert && (
        <Alert
          message="¿ARE YOU READY TO BUY IN ATH?"
          buttons={buttons1}
          // onClose={handleCloseAlert}
        />
      )}
      {showAlert2 && (
        <Alert
          message="IS THAT A YES?"
          buttons={buttons2}
          // onClose={handleCloseAlert}
        />
      )}
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
