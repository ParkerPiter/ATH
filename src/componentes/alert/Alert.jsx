import React, { useEffect } from 'react';
//JPGs imports
import alertImage from './Alerta.jpg'
import './alert.css';

const Alert = ({ message, buttons, position }) => {

  return (
    <div className="alert-overlay">
      <div className="alert">
        <div className={`alert-content ${position}`}>
          <p className='helloThere'>Hello there.....</p>
          <img src={alertImage} alt='' />
            <p className='message'>{message}</p>
          <div className="overlay-text">
            <div className="alert-actions">
              {buttons?.map((button, index) => (
                <button className='btn' key={index} onClick={() => button.onClick()}>
                  {button.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
