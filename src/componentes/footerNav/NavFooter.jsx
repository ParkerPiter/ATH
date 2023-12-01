import React, { useState } from "react";
import style from "./NavFooter.module.css";
import on from "../../assets/musicon.png";
import off from "../../assets/musicoff.png";
import useSound from "use-sound";
import musica from "../../assets/musica.mp3";

const Nav = ({handlePlay, handleStop, openModalToken, openModalGame, openModalChat, openModalMemes, openModalContract, twitter, telegram, meme, contract, pc, mdos, trash, game}) => {

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
        
        case 'telegram':
          window.open("https://t.me/joinchat/AJv6YqO_825h9T1d");
          break;

        case 'twitter':
          window.open("https://twitter.com/CryptoMemeCoin");
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
        <p className="btn" style={{paddingRight:'30px', marginTop:'-0.5px', marginBottom:'-2px'}}onClick={handleStartClick} ><img
          className={style.win}
          src="https://img.icons8.com/color/48/windows-95.png"
          alt="windows-95"
          onClick={handleStartClick}
        />Start</p>
        {isAccordionOpen && (
            <div className={style.optionList} style={{position: 'absolute', bottom: '100%', transform: 'scaleY(-1)'}}>
              <ul className={style.borderAccor} style={{backgroundColor: 'gray', padding: '25px', marginBottom:'0px', marginLeft:'-15px'}}>
                <li onClick={handleOptionClick} id="twitter" className={style.hovers} style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={twitter} alt="twitter"/>Twitter</li>
                <li onClick={handleOptionClick} id="token" className={style.hovers} style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={trash} alt="trash"/>Token Burn</li>
                <li onClick={handleOptionClick} id="telegram" className={style.hovers} style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={telegram} alt="telegram"/>Telegram</li>
                <li onClick={handleOptionClick} id="contract" className={style.hovers} style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={contract} alt="contract"/>Contract</li>
                <li onClick={handleOptionClick} id="memes" className={style.hovers} style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={meme} alt="meme"/>Memes</li>
                <li onClick={handleOptionClick} id="game" className={style.hovers} style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={game} alt="game"/>Games</li>
                <li onClick={handleOptionClick} id="chat" className={style.hovers} style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={mdos} alt="mdos"/>Chat Bot</li>
                <li  id="opcion1" style={{transform: 'scaleY(-1)', padding:'5px'}}><img style={{width:'25px', height:'25px', marginRight:'7px'}} src={pc} alt="pc"/>Chart</li>
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
