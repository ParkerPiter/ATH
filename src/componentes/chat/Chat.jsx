import { useState } from "react";
import style from './chat.module.css'

const Chat = () =>{
    const [messages, setMessages] = useState([]);
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
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    setMessages([...messages, { text: input, from: 'user' }, { text: data.message, from: 'bot' }]);
    setInput('');
  };

  return (
    <div className={style.container}>
        <h2>Chat</h2>
        <h3>Questions list:</h3>
        <p className={style.quest}>WHAT IS ATH COMMUNITY</p>
        <p className={style.quest}>WHERE TO GET SOME ATH?</p>
        <p className={style.quest}>MEME CONTEST</p>
        <p className={style.quest}>ATH ROCKET GAME</p>
        <p className={style.quest}>FEED ME, PLS</p>
        <p className={style.quest}>HOW CAN I BURN TOKENS?</p>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className={message.from === 'user' ? style.userMessage : style.botMessage}>
            {message.from === 'user' ? `${message.text} :${message.from}` : `${message.from}: ${message.text}`}
          </li>
        ))}
      </ul>
      <form onSubmit={handleInputSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
export default Chat;