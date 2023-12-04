import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Nav from "../componentes/footerNav/NavFooter";
// import win from '../../../windows-95-ui-kit/css/w95.css?inline'
import '../../../windows-95-ui-kit/css/w95.css';
//PNGs imports
import styles from "../app.module.css"
import telegram from ".././assets/TELEGRAM.png";
import twitter from ".././assets/TWITTER.png";
import meme from ".././assets/MEME.png";
import trash from ".././assets/BURN BIN.png";
import game from ".././assets/GAME.png";
import pc from ".././assets/CHART.png";
import mdos from ".././assets/CHAT BOT.png";
import contract from ".././assets/CONTRACT.png";
import myvideo from '../assets/VideoBackwebAtualización.mp4'
// components imports
import Alert from "./alert/Alert";
import Contract from "./contract/contract"
import Chat from "./chat/Chat";
import Tokenburn from "./tokenburn/tokenburn";
import Memes from "./meme/Meme";
import Game from "./game/game";
//Sonido de alert
import pum from "./alert/pum.mp3";
import useSound from 'use-sound'
import musica from '../assets/Song_ath_WEB.MP3'
import Modal from 'react-modal';
Modal.setAppElement('#root');
import { useModal } from "react-modal";

const Window = ({ name, component: Component, closeHandler }) => (
    <div>
      <Component closeHandler={closeHandler} />
    </div>
);


function MainP() {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);
  const [showAlert6, setShowAlert6] = useState(false);
  const [showAlert7, setShowAlert7] = useState(false);
  const [showAlert8, setShowAlert8] = useState(false);
  //showModals
  const [isModalChatOpen, setIsModalChatOpen] = useState(false);
  const [isModalContractOpen, setIsModalContractOpen] = useState(false);
  const [isModalTokenOpen, setIsModalTokenOpen] = useState(false);
  const [isModalMemeOpen, setIsModalMemeOpen] = useState(false);
  const [isModalGameOpen, setIsModalGameOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  //playAlerts
  const [audio, setAudio] = useState(new Audio(pum));
  //playMusic
  const [play, { stop }] = useSound(musica);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (!isPlaying) {
      play();
      setIsPlaying(true);
    }
  };
  const handleStop = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    }
  };
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

  const playVideo = () => {
    const videoElement = document.getElementById('myVideo'); 
    if (videoElement) {
      videoElement.play();
    }
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
          playVideo(),
          handlePlay(),
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
    }, 1000);

    return () => {
    //   clearTimeout(timerRocket);
    //   clearTimeout(timerFire);
      clearTimeout(timerAlert);
    };
  }, [audio]);

   // Estado para rastrear qué ventanas están abiertas
   const [openWindows, setOpenWindows] = useState([]);

   // Función para abrir una nueva ventana
   const openWindow = (name, component) => {
    setOpenWindows([...openWindows, { name, component }]);
    };

  // Función para cerrar una ventana
  const closeWindow = (name) => {
    setOpenWindows(openWindows.filter(window => window.name !== name));
  };


  const handleImageChatClick = () => {
    setIsModalChatOpen(true);
  };

  const handleCloseChatModal = () => {
    setIsModalChatOpen(false);
  };

  const handleImageContractClick = () => {
    setIsModalContractOpen(true);
  };

  const handleCloseContractModal = () => {
    setIsModalContractOpen(false);
  };

  const handleImageTokenClick = () => {
    setIsModalTokenOpen(true);
  };

  const handleCloseTokenModal = () => {
    setIsModalTokenOpen(false);
  };

  const handleImageMemeClick = () => {
    console.log('Open modal meme')
    setIsModalMemeOpen(true);
  };

  const handleCloseMemeModal = () => {
    setIsModalMemeOpen(false);
    console.log('Close modal meme')
  };

  const handleImageGameClick = () => {
    console.log('open modal game')
    setIsModalGameOpen(true);
  };

  const handleCloseGameModal = () => {
    console.log('Close modal game')
    setIsModalGameOpen(false);
  };

  return (
    <div>
      <div className={styles.container}>
      <video id="myVideo" loop muted
        style={{
            position: "fixed",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}
        >
            <source src={myvideo} type="video/mp4" />
        </video>
        {showAlert && (
          <Alert
            message="ARE YOU READY TO BUY IN ATH?"
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
                className={styles.icons}
              />
              <p className={styles.titulos} >TELEGRAM</p>
            </div>
          </Link>
          <div className={styles.hovers}>
            <img src={game} alt="" className={styles.icons} 
                // onClick={handleImageGameClick} 
                onClick={() => openWindow('Juego', Game)} />
            <p className={styles.titulos} >GAMES</p>
          </div>
          {/* <Modal
              isOpen={isModalGameOpen}
              onRequestClose={handleCloseGameModal}
              contentLabel="Chat Modal"
              style={{
                content: {
                  background: 'transparent',
                  border: 'none',
                },
                overlay: {
                  backgroundColor: 'transparent',
                }
              }}
              >
                <Game handleCloseGameModal={handleCloseGameModal} />
          </Modal> */}
        </div>
        <div className={styles.containerMini}>
          <div className={styles.hovers}>
            <img src={meme} alt="" className={styles.icons}
            //  onClick={handleImageMemeClick}
            onClick={() => openWindow('Meme', Memes)}/>
            <p className={styles.titulos} >MEMES</p>
          </div>
          {/* <Modal
              isOpen={isModalMemeOpen}
              onRequestClose={handleCloseMemeModal}
              contentLabel="Chat Modal"
              style={{
                position:'none',
                content: {
                  background: 'transparent',
                  border: 'none',
                },
                overlay: {
                  backgroundColor:'transparent',
                }
              }}
              >
                <Memes handleCloseMemeModal={handleCloseMemeModal} />
          </Modal> */}
          <div className={styles.hovers}>
              <img
                src={contract}
                alt=""
                className={styles.icons}
                // onClick={handleImageContractClick}
                onClick={() => openWindow('Contrato', Contract)}
              />
              <p className={styles.titulos} >CONTRACT</p>
          </div>
            {/* <Modal
              isOpen={isModalContractOpen}
              onRequestClose={handleCloseContractModal}
              contentLabel="Chat Modal"
              style={{
                content: {
                  background: 'transparent',
                  border: 'none',
                },
                overlay: {
                  backgroundColor: 'transparent',
                }
              }}
              >
                <Contract handleCloseContractModal={handleCloseContractModal} />
            </Modal> */}
        </div>
        <div className={styles.containerMini}>
          <div className={styles.hovers}>
            <img src={pc} alt="" className={styles.icons} />
            <p className={styles.titulos} >CHART</p>
          </div>
          <div className={styles.hovers}>
            <img src={mdos} alt="" className={styles.icons}
            // onClick={handleImageChatClick}
            onClick={() => openWindow('Chat Bot', Chat)} />
            <p className={styles.titulos} >CHAT BOT</p>
          </div>
          {/* <Modal
            isOpen={isModalChatOpen}
            onRequestClose={() => setIsModalChatOpen(false)}
            contentLabel="Chat Modal"
            style={{
              content: {
                background: 'transparent',
                border: 'none',
              },
              overlay: {
                backgroundColor: 'transparent',
              }
            }}
            >
            <Chat handleCloseChatModal={handleCloseChatModal}/>
          </Modal> */}
        </div>
        <div className={styles.containerMini}>
          <div className={styles.hovers}>
            <img src={trash} alt="" className={`${styles.icons} ${styles.twitter}`} 
            //onClick={handleImageTokenClick}
            onClick={() => openWindow('Token Burn', Tokenburn)}/>
            <p className={styles.titulos} >TOKEN BURN</p>
          </div>
          {/* <Modal
              isOpen={isModalTokenOpen}
              onRequestClose={handleCloseTokenModal}
              contentLabel="Chat Modal"
              style={{
                content: {
                  background: 'transparent',
                  border: 'none',
                },
                overlay: {
                  backgroundColor: 'transparent',
                }
              }}
              >
                <Tokenburn handleCloseTokenModal={handleCloseTokenModal} />
          </Modal> */}
          <Link to='https://twitter.com/'>
            <div>
              <img
                src={twitter}
                alt="#tele"
                className={`${styles.icons} ${styles.twitter}`}
                style={{marginLeft:'20px'}}
              />
              <p className={styles.titulos} >TWITTER</p>
            </div>
          </Link>
        </div>
        {openWindows.map((window, index) => (
        <Window key={index} name={window.name} component={window.component} closeHandler={() => closeWindow(window.name)} />
      ))}
        </div>
      <Nav handlePlay={handlePlay}  handleStop={handleStop} 
        openModalToken={handleImageTokenClick} 
        openModalGame={handleImageGameClick} 
        openModalChat={handleImageChatClick}
        openModalMemes={handleImageMemeClick}
        openModalContract={handleImageContractClick} 
        twitter={twitter}
        telegram={telegram}
        meme={meme}
        contract={contract}
        pc={pc}
        mdos={mdos}
        trash={trash}
        game={game}
      />
    
    </div>
  );
}

export default MainP;
