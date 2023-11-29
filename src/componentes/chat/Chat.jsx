import { useState } from "react";
import './chat.css'
import '../../../windows-95-ui-kit/css/w95.css'
import botAvatar from '../../assets/Imagen1.png'
import Draggable from 'react-draggable';

const Chat = ({handleCloseChatModal}) =>{
    const [messages, setMessages] = useState([{
        text: `Hello, crypto adventurer! Ready to buy at ATH without fear of falling? I'll
        be your guide in the exciting world of ATH, where buying at the top is just the
        beginning. What do you want to explore today?`,
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
      let messageText = data.message;
    if (option === '5') {
        messageText += ' <a href="www.dexscreener.com/ourpair">Click for details</a>';
    }
    if (option === '2'){
      messageText += '<a href="#telegram"> Telegram</a> <a href="#twitter">Twitter</a>';
    }
    setMessages([{ text: messageText, from: 'bot' }]);
  };

  return (
    <Draggable>
    <div className='card card-tertiary container-chat'>
      <div className='card-header' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'2px', padding:'0px 4px'}}>
          <h3>ATH CHAT</h3>
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
        <h3 className='card-text'>Options (click for response):</h3>
                <p className='quest' onClick={() => handleOptionClick('1')}>Token Burning Bin Description</p>
                <p className='quest' onClick={() => handleOptionClick('2')}>Social Media</p>
                <p className='quest' onClick={() => handleOptionClick('3')}>ATH Games</p>
                <p className='quest' onClick={() => handleOptionClick('4')}>MEMEs</p>
                <p className='quest' onClick={() => handleOptionClick('5')}>Chart</p>
                <p className='quest' onClick={() => handleOptionClick('6')}>Roadmap</p>
                <p className='quest' onClick={() => handleOptionClick('7')}>Supply?</p>
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
                              <span className='message-bot' dangerouslySetInnerHTML={{ __html: message.text }}></span>
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
