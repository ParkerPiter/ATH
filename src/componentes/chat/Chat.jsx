import { useState } from "react";
import './chat.css'
import '../../../windows-95-ui-kit/css/w95.css'
import botAvatar from '../../assets/Imagen1.png'
import Draggable from 'react-draggable';

const Chat = () =>{
    const [messages, setMessages] = useState([{
        text: '¡Bienvenidos a ATH, la comunidad de la web3 donde comprar en ATH no va a ser un error! Estamos comprometidos a hacer todo lo necesario para que este proyecto nos lleve a todos al éxito, incluido a nuestro pobre vagabundo que compro en ATH el pasado bullrun. ¿Cómo puedo asistirte hoy?',
        from: 'bot'
    }]);
    const [input, setInput] = useState('');

    const handleOptionClick = async (option) => {
      const response = await fetch('http://localhost:3000/chat', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: option }),
      });
      const data = await response.json();
      setMessages([...messages, { text: data.message, from: 'bot' }]);
  };

  return (
    <Draggable>
    <div className='card card-tertiary container-chat'>
      <div className='card-header'>
        <p>ATH CHAT</p>
      </div>
        <div className="card-body bg-custom ">
          <h3 className='card-text'>Opciones (presiona un numero para obtener respuesta):</h3>
          <p className='quest' onClick={() => handleOptionClick('1')} >1.Descubre qué es ATH Token</p>
          <p className='quest' onClick={() => handleOptionClick('2')} >2.Como puedes obtener ATH Tokens</p>
          <p className='quest' onClick={() => handleOptionClick('3')} >3.Informate sobre el proyecto ATH y como puedes contribuir</p>
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
