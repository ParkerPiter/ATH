import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../footerNav/NavFooter";
// import win from '../../../windows-95-ui-kit/css/w95.css?inline'
import "../../../windows-95-ui-kit/css/w95.css";
//PNGs imports
import avatarBot from "../../assets/Imagen1.png";
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
// import myvideo from '../../assets/VideoBackwebAtualización.mp4'
// components imports
import Alert from "../alert/Alert";
import Contract from "../contract/contract";
import Chat from "../chat/Chat";
import Tokenburn from "../tokenburn/tokenburn";
import Memes from "../meme/Meme";
import Game from "../game/game";
//Sonido de alert
import pum from "../../componentes/alert/pum.mp3";
import useSound from "use-sound";
// import musica from '../../assets/Song_ath_WEB.MP3'
import Modal from "react-modal";
Modal.setAppElement("#root");

const Window = ({ component: Component, closeHandler}) => (
  <div>
    <Component closeHandler={closeHandler} />
  </div>
);

function Main() {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);
  const [showAlert6, setShowAlert6] = useState(false);
  const [showAlert7, setShowAlert7] = useState(false);
  const [showAlert8, setShowAlert8] = useState(false);
  const [showBotMessage, setShowBotMessage] = useState(false);

  //playAlerts
  const [audio, setAudio] = useState(new Audio(pum));
  //playMusic
  // const [play, { stop }] = useSound(musica);
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

  // const playVideo = () => {
  //   const videoElement = document.getElementById('myVideo');
  //   if (videoElement) {
  //     videoElement.play();
  //   }
  // };

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
        case 7:
          setTimeout(() => {
            setShowBotMessage(true);
          }, 2500); // Retraso de 2.5 seg
          break;
        default:
          playVideo(), handlePlay(), clearInterval(intervalId); // Detener la repetición después de que todas las alertas se han mostrado
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
      // setShowRocket(true);
    }, 3000);

    const timerFire = setTimeout(() => {
      // setShowFire(true);
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
  const openWindow = (name, component, setShowBotMessage) => {
    setShowBotMessage(false);
    setOpenWindows([...openWindows, { name, component}]);
  };

  // Función para cerrar una ventana
  const closeWindow = (name) => {
    setOpenWindows(openWindows.filter((window) => window.name !== name));
  };

  return (
    <div>
      <div className={styles.container}>
        <video
          id="myVideo"
          loop
          muted
          style={{
            position: "fixed",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={"myvideo"} type="video/mp4" />
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
        {showBotMessage && (
          <div className={styles.containMessageBot} onClick={() => openWindow("Chat Bot", Chat, setShowBotMessage)}>
            <div>
              <p>DO YOU NEED HELP?</p>
              <div className={styles.flechita}></div>
              <img src={avatarBot} alt="bot Avatar" />
            </div>
          </div>
        )}
        <div className={styles.containerMini}>
          <Link to="https://web.telegram.org/a/">
            <div>
              <img src={telegram} alt="#twitter" className={styles.icons} />
              <p className={styles.titulos}>TELEGRAM</p>
            </div>
          </Link>
          <div className={styles.hovers}>
            <img
              src={game}
              alt=""
              className={styles.icons}
              onClick={() => openWindow("Juego", Game, setShowBotMessage)}
            />
            <p className={styles.titulos}>GAMES</p>
          </div>
        </div>
        <div className={styles.containerMini}>
          <div className={styles.hovers}>
            <img
              src={meme}
              alt=""
              className={styles.icons}
              onClick={() => openWindow("Meme", Memes, setShowBotMessage)}
            />
            <p className={styles.titulos}>MEMES</p>
          </div>
          <div className={styles.hovers}>
            <img
              src={contract}
              alt=""
              className={styles.icons}
              onClick={() => openWindow("Contrato", Contract, setShowBotMessage)}
            />
            <p className={styles.titulos}>CONTRACT</p>
          </div>
        </div>
        <div className={styles.containerMini}>
          <div className={styles.hovers}>
            <img src={pc} alt="" className={styles.icons} />
            <p className={styles.titulos}>CHART</p>
          </div>
          <div className={styles.hovers}>
            <img
              src={mdos}
              alt=""
              className={styles.icons}
              onClick={() => openWindow("Chat Bot", Chat, setShowBotMessage)}
            />
            <p className={styles.titulos}>CHAT BOT</p>
          </div>
        </div>
        <div className={styles.containerMini}>
          <div className={styles.hovers}>
            <img
              src={trash}
              alt=""
              className={`${styles.icons} ${styles.twitter}`}
              onClick={() => openWindow("Token Burn", Tokenburn, setShowBotMessage)}
            />
            <p className={styles.titulos}>TOKEN BURN</p>
          </div>
          <Link to="https://twitter.com/">
            <div>
              <img
                src={twitter}
                alt="#tele"
                className={`${styles.icons} ${styles.twitter}`}
                style={{ marginLeft: "20px" }}
              />
              <p className={styles.titulos}>TWITTER</p>
            </div>
          </Link>
        </div>
        {openWindows.map((window, index) => (
          <Window
            key={index}
            name={window.name}
            component={window.component}
            closeHandler={() => closeWindow(window.name)}
          />
        ))}
      </div>
      <Nav
        handlePlay={handlePlay}
        handleStop={handleStop}
        openModalToken={() => openWindow("Token Burn", Tokenburn, setShowBotMessage)}
        openModalGame={() => openWindow("Juego", Game, setShowBotMessage)}
        openModalChat={() => openWindow("Chat Bot", Chat, setShowBotMessage)}
        openModalMemes={() => openWindow("Meme", Memes, setShowBotMessage)}
        openModalContract={() => openWindow("Contrato", Contract, setShowBotMessage)}
        twitter={twitter}
        telegram={telegram}
        meme={meme}
        contract={contract}
        pc={pc}
        mdos={mdos}
        trash={trash}
        game={game}
        closeWindow={closeWindow}
      />
    </div>
  );
}

export default Main;
