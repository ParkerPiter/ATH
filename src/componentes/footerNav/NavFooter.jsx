import React, { useState, useEffect } from "react";
import '../../../windows-95-ui-kit/css/w95.css'
import style from "./NavFooter.module.css";
import on from "../../assets/musicon.png";
import off from "../../assets/musicoff.png";
import useSound from "use-sound";
import musica from "../../assets/Song_ath_WEB.MP3"

const Nav = ({
  handlePlay,
  handleStop,
  openModalToken,
  openModalGame,
  openModalChat,
  openModalMemes,
  openModalContract,
  twitter,
  telegram,
  meme,
  contract,
  pc,
  mdos,
  trash,
  game,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  const handleStartClick = () => {
    console.log('open start..')
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleOptionClick = (event) => {
    switch (event.target.id) {
      case "token":
        openModalToken();
        break;

      case "game":
        openModalGame();
        break;

      case "chat":
        openModalChat();
        break;

      case "memes":
        openModalMemes();
        break;

      case "contract":
        openModalContract();
        break;

      case "telegram":
        window.open("https://t.me/joinchat/AJv6YqO_825h9T1d");
        break;

      case "twitter":
        window.open("https://twitter.com/CryptoMemeCoin");
        break;
    }
  };

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
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let hours = time.getHours();
  let min = time.getMinutes();
  min = min < 10 ? `0${min}` : min;

  let pmAm = hours >= 12 ? "PM" : "AM";

  // Convertir a formato de 12 horas
  hours = hours % 12 || 12;

  return (
      <div className={style.footer}>
        <div className={style.sinMargin}>
          <p
            className={`${style.start} btn`}
            style={{
              paddingRight: "5px",
              marginTop: "-0.5px",
              marginBottom: "-2px",
            }}
            onClick={handleStartClick}
          >
            <img
              className={style.win}
              src="https://img.icons8.com/color/48/windows-95.png"
              alt="windows-95"
              onClick={handleStartClick}
            />
            Start
          </p>
          {isAccordionOpen && (
            <div
              className={style.optionList}
              style={{
                position: "fixed",
                bottom: "45px",
                transform: "scaleY(-1)",
              }}
            >
              <ul
                className={style.borderAccor}
                style={{
                  backgroundColor: "gray",
                  padding: "5px 25px 5px 25px",
                  marginBottom: "0px",
                  marginLeft: "-15px",
                }}
              >
                <li
                  onClick={handleOptionClick}
                  id="twitter"
                  className={style.hovers}
                  style={{ transform: "scaleY(-1)", padding: "5px" }}
                >
                  <img
                    style={{ width: "25px", height: "25px", marginRight: "7px" }}
                    src={twitter}
                    alt="twitter"
                  />
                  Twitter
                </li>
                <li
                  onClick={handleOptionClick}
                  id="token"
                  className={style.hovers}
                  style={{ transform: "scaleY(-1)", padding: "5px" }}
                >
                  <img
                    style={{ width: "25px", height: "25px", marginRight: "7px" }}
                    src={trash}
                    alt="trash"
                  />
                  Token Burn
                </li>
                <li
                  onClick={handleOptionClick}
                  id="telegram"
                  className={style.hovers}
                  style={{ transform: "scaleY(-1)", padding: "5px" }}
                >
                  <img
                    style={{ width: "25px", height: "25px", marginRight: "7px" }}
                    src={telegram}
                    alt="telegram"
                  />
                  Telegram
                </li>
                <li
                  onClick={handleOptionClick}
                  id="contract"
                  className={style.hovers}
                  style={{ transform: "scaleY(-1)", padding: "5px" }}
                >
                  <img
                    style={{ width: "25px", height: "25px", marginRight: "7px" }}
                    src={contract}
                    alt="contract"
                  />
                  Contract
                </li>
                <li
                  onClick={handleOptionClick}
                  id="memes"
                  className={style.hovers}
                  style={{ transform: "scaleY(-1)", padding: "5px" }}
                >
                  <img
                    style={{ width: "25px", height: "25px", marginRight: "7px" }}
                    src={meme}
                    alt="meme"
                  />
                  Memes
                </li>
                <li
                  onClick={handleOptionClick}
                  id="game"
                  className={style.hovers}
                  style={{ transform: "scaleY(-1)", padding: "5px" }}
                >
                  <img
                    style={{ width: "25px", height: "25px", marginRight: "7px" }}
                    src={game}
                    alt="game"
                  />
                  Games
                </li>
                <li
                  onClick={handleOptionClick}
                  id="chat"
                  className={style.hovers}
                  style={{ transform: "scaleY(-1)", padding: "5px" }}
                >
                  <img
                    style={{ width: "25px", height: "25px", marginRight: "7px" }}
                    src={mdos}
                    alt="mdos"
                  />
                  Chat Bot
                </li>
                <li
                  id="opcion1"
                  style={{ transform: "scaleY(-1)", padding: "5px" }}
                >
                  <img
                    style={{ width: "25px", height: "25px", marginRight: "7px" }}
                    src={pc}
                    alt="pc"
                  />
                  Chart
                </li>
                <div className={style.barraGris}></div>
                <p className={style.ath}>HTA</p>
              </ul>
            </div>
          )}
        </div>
        <div className={` ${style.clock}`}>
          <div className={style.soundIcons}>
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
          </div>
          <p className={style.timer}>
            {`${hours}:${min} ${pmAm}`}
          </p>
        </div>
      </div>
    );
};

export default Nav;

{/* <div className='navbar navbar-expand-lg navbar-dark justify-content-between mb-3 footer'>
      <ul class="navbar-nav navbar-nav-hover flex-row align-items-center">
        <li class="nav-item">
          <img
              className={style.win}
              src="https://img.icons8.com/color/48/windows-95.png"
              alt="windows-95"
              onClick={handleStartClick}
            />
            <span class="nav-link-inner-text">Start</span>
           
        </li>
      </ul>
      <div className={style.sinMargin}>
        <p
          className={`${style.start} btn`}
          style={{
            paddingRight: "30px",
            marginTop: "-0.5px",
            marginBottom: "-2px",
          }}
          onClick={handleStartClick}
        >
          
          Start
        </p>
        {isAccordionOpen && (
          <div
            className={style.optionList}
            style={{
              position: "fixed",
              bottom: "45px",
              transform: "scaleY(-1)",
            }}
          >
            <ul
              className={style.borderAccor}
              style={{
                backgroundColor: "gray",
                padding: "5px 25px 5px 25px",
                marginBottom: "0px",
                marginLeft: "-15px",
              }}
            >
              <li
                onClick={handleOptionClick}
                id="twitter"
                className={style.hovers}
                style={{ transform: "scaleY(-1)", padding: "5px" }}
              >
                <img
                  style={{ width: "25px", height: "25px", marginRight: "7px" }}
                  src={twitter}
                  alt="twitter"
                />
                Twitter
              </li>
              <li
                onClick={handleOptionClick}
                id="token"
                className={style.hovers}
                style={{ transform: "scaleY(-1)", padding: "5px" }}
              >
                <img
                  style={{ width: "25px", height: "25px", marginRight: "7px" }}
                  src={trash}
                  alt="trash"
                />
                Token Burn
              </li>
              <li
                onClick={handleOptionClick}
                id="telegram"
                className={style.hovers}
                style={{ transform: "scaleY(-1)", padding: "5px" }}
              >
                <img
                  style={{ width: "25px", height: "25px", marginRight: "7px" }}
                  src={telegram}
                  alt="telegram"
                />
                Telegram
              </li>
              <li
                onClick={handleOptionClick}
                id="contract"
                className={style.hovers}
                style={{ transform: "scaleY(-1)", padding: "5px" }}
              >
                <img
                  style={{ width: "25px", height: "25px", marginRight: "7px" }}
                  src={contract}
                  alt="contract"
                />
                Contract
              </li>
              <li
                onClick={handleOptionClick}
                id="memes"
                className={style.hovers}
                style={{ transform: "scaleY(-1)", padding: "5px" }}
              >
                <img
                  style={{ width: "25px", height: "25px", marginRight: "7px" }}
                  src={meme}
                  alt="meme"
                />
                Memes
              </li>
              <li
                onClick={handleOptionClick}
                id="game"
                className={style.hovers}
                style={{ transform: "scaleY(-1)", padding: "5px" }}
              >
                <img
                  style={{ width: "25px", height: "25px", marginRight: "7px" }}
                  src={game}
                  alt="game"
                />
                Games
              </li>
              <li
                onClick={handleOptionClick}
                id="chat"
                className={style.hovers}
                style={{ transform: "scaleY(-1)", padding: "5px" }}
              >
                <img
                  style={{ width: "25px", height: "25px", marginRight: "7px" }}
                  src={mdos}
                  alt="mdos"
                />
                Chat Bot
              </li>
              <li
                id="opcion1"
                style={{ transform: "scaleY(-1)", padding: "5px" }}
              >
                <img
                  style={{ width: "25px", height: "25px", marginRight: "7px" }}
                  src={pc}
                  alt="pc"
                />
                Chart
              </li>
              <div className={style.barraGris}></div>
              <p className={style.ath}>HTA</p>
            </ul>
          </div>
        )}
      </div>
      <div class="time text-center">
        <div className={style.soundIcons}>
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
        </div>
        <span className="time text-uppercase">
          {`${hours}:${min} ${pmAm}`}
        </span>
      </div>
    </div> */}