import React, { useState } from "react";
import style from "./NavFooter.module.css";
import on from "../../assets/musicon.png";
import off from "../../assets/musicoff.png";
import useSound from "use-sound";
import musica from "../../assets/musica.mp3";

const Nav = ({handlePlay, handleStop, openModalToken, openModalGame, openModalChat, openModalMemes, openModalContract, twitter, telegram, meme, contract, pc, mdos, trash, game}) => {

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  console.log(isAccordionOpen)

  const handleStartClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  console.log(isAccordionOpen)

  const handleOptionChange = (event) => {
    if (event.target.value === 'opcion1') {
      openModalToken();
    }
  }
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
        <p className="btn" style={{paddingRight:'30px', marginTop:'-0.5px', marginBottom:'-2px'}}onClick={handleStartClick} ><img
          className={style.win}
          src="https://img.icons8.com/color/48/windows-95.png"
          alt="windows-95"
          onClick={handleStartClick}
        />Start</p>
        {isAccordionOpen && (
            <div className={style.optionList} style={{position: 'absolute', bottom: '100%', transform: 'scaleY(-1)'}}>
              <ul onChange={handleOptionChange} className={style.borderAccor} style={{backgroundColor: 'gray', padding: '25px', marginBottom:'0px'}}>
                <li id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={twitter} alt="twitter"/>Twitter</li>
                <li id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={trash} alt="trash"/>Token Burn</li>
                <li id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={telegram} alt="telegram"/>Telegram</li>
                <li id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={contract} alt="contract"/>MSDOS</li>
                <li id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={meme} alt="meme"/>Memes</li>
                <li id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={game} alt="game"/>Games</li>
                <li id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={mdos} alt="mdos"/>Chat Bot</li>
                <li id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={pc} alt="pc"/>Chart</li>
                <div className={style.barraGris}></div>
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
