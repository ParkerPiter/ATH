import { useState } from "react";
import style from './chat.module.css'
import botAvatar from '../../assets/Imagen1.png'

const Chat = () =>{
    const [messages, setMessages] = useState([{
        text: `¡Bienvenidos a ATH, la comunidad de la web3 donde comprar en ATH no va a ser un error! Estamos comprometidos a hacer todo lo necesario para que este proyecto nos lleve a todos al éxito, incluido a nuestro pobre vagabundo que compro en ATH el pasado bullrun. ¿Cómo puedo asistirte hoy?`,
        from: 'bot'
    }]);
    const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input}),
    });
    const data = await response.json();
    setMessages([...messages, { text: input, from: 'user' }, { text: data.message, from: 'bot' }]);
    setInput('');
  };

  return (
    <div className={style.container}>
        <h3 className={style.barraGris}></h3>
        <h3 className={style.barraAzul}></h3>
        <h3 className={style.barraGris2}></h3>
  <h3 className={style.barraGris3}></h3>
        <h3 className={style.firstOp}>Opciones (presiona un numero para obtener respuesta):</h3>
        <p className={style.quest}>1.Descubre qué es ATH Token</p>
        <p className={style.quest}>2.Cómo puedes obtener ATH Tokens</p>
        <p className={style.quest}>3.Infórmate sobre el proyecto ATH y cómo puedes contribuir</p>
        <ul className={style.chat}>
            {messages.map((message, index) => (
              <li key={index} className={message.from === 'user' ? style.userMessage : style.botMessage}>
                {message.from === 'user' ? 
                    <>
                    <span>{message.from}:</span>
                    <span>{message.text}</span>
                    </> 
                    : 
                    <>
                        <div className={style.burbuja}>
                            <span className={style.message}>{message.text} </span>
                        </div>
                        <span><img src={botAvatar} alt="Bot avatar" className={style.botAvatar} /></span>
                    </>
                }
                </li>
            ))}
        </ul>
      <form className={style.form} onSubmit={handleInputSubmit}>
        <input className={style.input} type="text" value={input} onChange={handleInputChange} />
        <button className={style.button} type="submit">Enviar</button>
      </form>
    </div>
  )
}
export default Chat;