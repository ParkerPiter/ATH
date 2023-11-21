import React, { useEffect } from 'react';
//JPGs imports
import alertImage from './Alerta.jpg'
import './alert.css';

const Alert = ({ message, buttons, onClose }) => {
  // useEffect(() => {
  //   // Reproducir el sonido cuando el componente se monta
  //   const audio = new Audio(pum);
  //   audio.play();

  //   return () => {
  //     // Limpiar el audio cuando el componente se desmonta
  //     audio.pause();
  //     audio.currentTime = 0;
  //   };
  // }, []); // Se ejecuta solo una vez al montar el componente
  return (
    <div className="alert-overlay">
      <div className="alert">
        <div className="alert-content">
          <p className='helloThere'>Hello there.....</p>
          <img src={alertImage} alt='' />
          <div className="overlay-text">
            <p className='message'>{message}</p>
            <div className="alert-actions">
              {buttons.map((button, index) => (
                <button className='btn' key={index} onClick={() => button.onClick()}>
                  {button.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* <button className="close-button" onClick={onClose}>
          Cerrar
        </button> */}
      </div>
    </div>
  );
};

export default Alert;
