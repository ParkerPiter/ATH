import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
//PNGs imports
import styles from "../../app.module.css";
import telegram from "../../assets/TELEGRAM.png";
import twitter from "../../assets/TWITTER.png";
import meme from "../../assets/MEME.png";
import trash from "../../assets/BURN BIN.png";
import game from "../../assets/GAME.png";
import pc from "../../assets/CHART.png";
import mdos from "../../assets/CHAT BOT.png";
import contract from "../../assets/CONTRACT.png";
import rocket from "../../assets/ROCKET.png";
import fire from "../../assets/image_processing20211213-25233-1wck2hl (1).gif";
// components imports
import Alert from "../../componentes/alert/Alert";
import pum from "../../componentes/alert/pum.mp3";
import Chat from "../chat/Chat";
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Main() {
  const [showRocket, setShowRocket] = useState(false);
  const [showFire, setShowFire] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);
  const [showAlert6, setShowAlert6] = useState(false);
  const [showAlert7, setShowAlert7] = useState(false);
  const [showAlert8, setShowAlert8] = useState(false);
  const [audio, setAudio] = useState(new Audio(pum));
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleConfirmAction = () => {
    let counter = 1; // Inicia en 1 para mostrar la primera alerta inmediatamente
    const intervalId = setInterval(() => {
      switch (counter) {
        case 1:
          setShowAlert3(true);
          playSound();
          break;
        case 2:
          setShowAlert4(true);
          playSound();
          break;
        case 3:
          setShowAlert5(true);
          playSound();
          break;
        case 4:
          setShowAlert6(true);
          playSound();
          break;
        case 5:
          setShowAlert7(true);
          playSound();
          break;
        case 6:
          setShowAlert8(true);
          playSound();
          break;
        default:
          clearInterval(intervalId); // Detener la repetición después de que todas las alertas se han mostrado
      }

      counter += 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      setShowAlert2(false);
      setShowAlert3(false);
      setShowAlert4(false);
      setShowAlert5(false);
      setShowAlert6(false);
      setShowAlert7(false);
      setShowAlert8(false);
      setShowAlert(false);
    }, 8000);
  };

  const buttons1 = [
    { name: "YES", onClick: handleConfirmAction },
    { name: "NO", onClick: handleCloseAlert },
  ];

  const buttons2 = [
    { name: "YES", onClick: handleConfirmAction },
    { name: "YES", onClick: handleConfirmAction },
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

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.container}>
        {showRocket && (
          <img src={rocket} alt="rocket" className={styles.rocket} />
        )}
        {showFire && <img src={fire} alt="fire" className={styles.fire} />}
        {showAlert && (
          <Alert
            message="¿ARE YOU READY TO BUY IN ATH?"
            buttons={buttons1}
            position="center"
          />
        )}
        {showAlert2 && (
          <Alert
            message="IS THAT A YES?"
            buttons={buttons2}
            position="center"
          />
        )}
        {showAlert3 && <Alert message="YES" position="topLeft" />}
        {showAlert4 && <Alert message="YES" position="bottomRight" />}
        {showAlert5 && <Alert message="YES" position="bottomLeft" />}
        {showAlert6 && <Alert message="YES" position="topRight" />}
        {showAlert7 && <Alert message="YES" position="topLeftR" />}
        {showAlert8 && <Alert message="YES" position="bottomRightL" />}
        <div className={styles.containerMini}>
          <Link to='https://web.telegram.org/a/'>
            <div>
              <img
                src={telegram}
                alt="#twitter"
                style={{width: '80px', height: '55px', marginBottom:'0px'}}
              />
              <p style={{color: 'white'}}>TELEGRAM</p>
            </div>
          </Link> 
          <Link to='https://twitter.com/'>
            <div>
              <img
                src={twitter}
                alt="#tele"
                style={{width: '80px', height: '55px', marginBottom:'0px'}}
              />
              <p style={{color: 'white'}} >TWITTER</p>
            </div>
          </Link>
        </div>
        <div className={styles.containerMini}>
          <div>
            <img src={meme} alt="" style={{width: '80px', height: '55px', marginBottom:'0px'}} />
            <p>MEMES</p>
          </div>
          <div>
            <img
              src={contract}
              alt=""
              style={{width: '80px', height: '55px', marginBottom:'0px'}}
            />
            <p>MSDOS</p>
          </div>
        </div>
        <div className={styles.containerMini}>
          <div>
            <img src={pc} alt="" style={{width: '80px', height: '55px', marginBottom:'0px'}} />
            <p>CHART</p>
          </div>
          <div>
            <img src={mdos} alt="" style={{width: '80px', height: '55px', marginBottom:'0px'}}
            onClick={handleImageClick} />
            <p>CHAT BOT</p>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Chat Modal"
            style={{
              content: {
                backgroundColor: 'black',
                width: '375px',
                height: '550px',
                left:'880px',
              },
              overlay: {
                backgroundColor: 'transparent'
              }
            }}
          >
          <Chat />
          {/* <button className={styles.button} onClick={handleCloseModal}>X Cerrar chat</button> */}
        </Modal>
        </div>
        <div className={styles.containerMini}>
          <div>
            <img src={trash} alt="" style={{width: '80px', height: '55px', marginBottom:'0px'}} />
            <p>TOKEN BURN</p>
          </div>
          <div>
            <img src={game} alt="" style={{width: '80px', height: '55px', marginBottom:'0px'}} />
            <p>GAMES</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
