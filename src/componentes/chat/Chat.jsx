import { useState } from "react";
import './chat.css'
import '../../../windows-95-ui-kit/css/w95.css'
import botAvatar from '../../assets/Imagen1.png'
import Draggable from 'react-draggable';

const Chat = ({handleCloseChatModal}) =>{
    const [messages, setMessages] = useState([{
        text: '¡Bienvenidos a ATH, la comunidad de la web3 donde comprar en ATH no va a ser un error! Estamos comprometidos a hacer todo lo necesario para que este proyecto nos lleve a todos al éxito, incluido a nuestro pobre vagabundo que compro en ATH el pasado bullrun. ¿Cómo puedo asistirte hoy?',
        from: 'bot'
    }]);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = async (option) => {
      setSelectedOption(option);
      const response = await fetch('http://localhost:3000/chat', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: option }),
      });
      const data = await response.json();
      setMessages([{ text: data.message, from: 'bot' }]);
  };

  const handleSubOptionClick = async (subOption) => {
      const response = await fetch('http://localhost:3000/chat', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: `${selectedOption}.${subOption}` }),
      });
      const data = await response.json();
      setMessages([{ text: data.message, from: 'bot' }]);
  };

  return (
    <Draggable>
    <div className='card card-tertiary container-chat'>
      <div className='card-header' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'2px'}}>
        <p>ATH CHAT</p>
          <div>
            <button className="btn btn-primary" style={{marginRight:'-2px', padding:'5px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
              </svg>
            </button>
            <button className="btn btn-primary" style={{marginRight:'-2px', padding:'5px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-fullscreen" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/>
              </svg>
            </button>
            <button onClick={handleCloseChatModal} className="btn btn-primary" style={{marginRight:'-2px', padding:'5px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </button>
          </div>
      </div>
        <div className="card-body bg-custom ">
        <h3 className='card-text'>Opciones (presiona un numero para obtener respuesta):</h3>
                <p className='quest' onClick={() => handleOptionClick('1')}>1.Descubre qué es ATH Token</p>
                {selectedOption === '1' && <p className='quest' onClick={() => handleSubOptionClick('1')}>1.1.Sub-opción para ATH Token</p>}
                <p className='quest' onClick={() => handleOptionClick('2')}>2.Como puedes obtener ATH Tokens</p>
                {selectedOption === '2' && <p className='quest' onClick={() => handleSubOptionClick('1')}>2.1.Sub-opción para obtener ATH Tokens</p>}
                <p className='quest' onClick={() => handleOptionClick('3')}>3.Informate sobre el proyecto ATH y como puedes contribuir</p>
                {selectedOption === '3' && <p className='quest' onClick={() => handleSubOptionClick('1')}>3.1.Sub-opción para el proyecto ATH</p>}
          <ul className='chat'>
              {messages.map((message, index) => (
                <li key={index} className={message.from === 'user' ? 'userMessage' : 'botMessage'}>
                  {message.from === 'user' ? 
                      <>
                      <span>{message.from}:</span>
                      <span>{message.text}</span>
                      </> 
                      : 
                      <>
                          <div className='burbuja'>
                              <span className='message-bot'>{message.text} </span>
                          </div>
                          <span><img src={botAvatar} alt="Bot avatar" className='botAvatar' /></span>
                      </>
                  }
                  </li>
              ))}
          </ul>
      </div>
    </div>
    </Draggable>
  )
}
export default Chat;
