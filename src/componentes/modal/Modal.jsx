import React from "react";
import modalToken from "./modalEnBlanco.jpg";
import "./modal.css";
function Medal({ textB, messageM, token, memes, colorM }) {
  return (
    <div className='containerModal'>
      <p className="textB">{textB}</p>
      <img className="modal" src={modalToken} alt="" />
      <p className={`messageM ${colorM}`}>{messageM}</p>
      <p className={`token ${colorM}`}>{token}</p>
      <div className="memes">
        {memes?.map((memess, index) =>
          <img className="imgMemes" src={memess} key={index}/>
        )}
      </div>
    </div>
  );
}

export default Medal;
