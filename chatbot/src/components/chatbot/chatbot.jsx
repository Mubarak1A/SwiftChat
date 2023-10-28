import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY =  import.meta.env.VITE_OPENAI;

const ChatBot = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: 'Hello, I am SwiftChat. How can I help you?',
      sender: 'SwiftChat',
    },
  ]);

  const handleSend = async (message) => {
    const userMessage = {
      message: message,
      sender: 'user',
      direction: 'outgoing',
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setTyping(true);

    // Modify the way you send the conversation history to OpenAI
    await processMessageToOpenAI(newMessages);
  };

  async function processMessageToOpenAI(chatMessages) {
    // Extract the conversation history
    const conversation = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'SwiftChat') {
        role = 'system';
      } else {
        role = 'user';
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [...conversation],
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data.choices[0].message.content);

      // Update the conversation with the response from the API
      const responseMessage = {
        message: data.choices[0].message.content,
        sender: 'SwiftChat',
      };

      setMessages([...chatMessages, responseMessage]);
      setTyping(false);
    });
  }

  return(
    <div className='chatbot' id='app' style={{ marginTop:"80px"}}>
        <div style={{ position:'relative', height:'100%', width:'70%', margin:'auto' }}>
            <MainContainer>
                <ChatContainer  style={{padding:"10px"}}>
                    <MessageList
                        style={{padding:"10px"}}
                        typingIndicator={typing ? <TypingIndicator content='SwiftChat is typing'/> : null}
                    >
                        {messages.map((message, i) => {
                            return <Message key={i} model={message} />
                        })}   
                    </MessageList>
                    <MessageInput placeholder='Enter message here' onSend={handleSend}/>
                </ChatContainer>
            </MainContainer>
        </div>

      <div className="footer" style={{ position: "fixed", bottom: "0", right: "0", left: "0", marginTop: "20px" }}>
        &copy; 2023 Swift<span style={{ color: "blue" }}>Chat</span>. All rights reserved.
      </div>
    </div>
  );
};

export default ChatBot;
