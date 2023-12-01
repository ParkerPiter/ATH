import React, { useState } from "react";
import style from "./NavFooter.module.css";
import on from "../../assets/musicon.png";
import off from "../../assets/musicoff.png";
import useSound from "use-sound";
import musica from "../../assets/musica.mp3";

const Nav = ({handlePlay, handleStop, openModalToken, openModalGame, openModalChat, openModalMemes, openModalContract}) => {

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleStartClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleOptionClick = (event) => {
      switch(event.target.id){
        case 'token':
          openModalToken();
          break;

        case 'game':
          openModalGame();
          break;

        case 'chat':
          openModalChat();
          break;

        case 'memes':
          openModalMemes();
          break;

        case 'contract':
          openModalContract();
          break;
      }
  }
  
  // const [play, { stop }] = useSound(musica);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const handlePlay = () => {
  //   if (!isPlaying) {
  //     play();
  //     setIsPlaying(true);
  //   }
  // };

  // const handleStop = () => {
  //   if (isPlaying) {
  //     stop();
  //     setIsPlaying(false);
  //   }
  // };
  // Obtener la hora actual
  const time = new Date();

  // Obtener la hora, los minutos y los segundos
  let hours = time.getHours();
  const min = time.getMinutes();

  let pmAm = hours >= 12 ? "PM" : "AM";

  // Convertir a formato de 12 horas
  hours = hours % 12 || 12;

  return (
    <div className={style.footer}>
      <div>
        <p className="btn mr-2 mb-2 btn-sm btn-primary" style={{paddingRight:'20px', marginTop:'2px'}}onClick={handleStartClick} ><img
          className={style.win}
          src="https://img.icons8.com/color/48/windows-95.png"
          alt="windows-95"
          onClick={handleStartClick}
        />Start</p>
        {isAccordionOpen && (
            <div  style={{position: 'absolute', bottom: '100%', transform: 'scaleY(-1)'}}>
              <ul style={{backgroundColor: 'gray', padding: '25px'}}>
                <p onClick={handleOptionClick} id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}>Abrir modal Tokenburn</p>
                <p onClick={handleOptionClick} id="token" style={{transform: 'scaleY(-1)', padding:'5px'}}>Abrir modal Tokenburn</p>
                <p onClick={handleOptionClick} id="game" style={{transform: 'scaleY(-1)', padding:'5px'}}>Abrir modal Tokenburn</p>
                <p onClick={handleOptionClick} id="contract" style={{transform: 'scaleY(-1)', padding:'5px'}}>Abrir modal Tokenburn</p>
                <p onClick={handleOptionClick} id="chat" style={{transform: 'scaleY(-1)', padding:'5px'}}>Abrir modal Tokenburn</p>
                <p onClick={handleOptionClick} id="memes" style={{transform: 'scaleY(-1)', padding:'5px'}}>Abrir modal Tokenburn</p>
                <p id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}>Abrir modal Tokenburn</p>
                <p id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}>Abrir modal Tokenburn</p>
              </ul>
            </div>
          )}
      </div>
      <div className={style.footer}>
        <img
          className={`${style.audioOn} ${style.on1}`}
          src={on}
          alt=""
          onClick={handlePlay}
        />
        <img
          className={`${style.audioOn} ${style.off}`}
          src={off}
          alt=""
          onClick={handleStop}
        />
        <img
          className={`${style.audioOn} ${style.on2}`}
          src={on}
          alt=""
          onClick={handlePlay}
        />
      <p className={style.clock}>
        {hours}:{min} {pmAm}
      </p>
      </div>
    </div>
  );
};

export default Nav;
