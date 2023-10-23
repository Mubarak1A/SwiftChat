import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

const API_KEY = import.meta.env.API_KEY

const ChatBot = () => {
    const [typing, setTyping] = useState(false);

    const [messages, setMessages] = useState([
        {
            message: 'Hello, I am SwiftChat. How can i help you',
            sender: 'SwiftChat'
        }
    ])


    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user',
            direction: 'outgoing'
        }

        const newMessages = [...messages, newMessage]  //all old messages + new message

        //update message
        setMessages(newMessages)

        //set typing indicator for chatbot
        setTyping(true);

        //process message to openAi api
        await processMessageToOpenAI(newMessages);

        //update user chat
        //updateChats(newMessage);

    }

    async function processMessageToOpenAI(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role = '';
            if (messageObject.sender === 'ChatGPT'){
                role = 'assistance';
            } else {
                role = 'user';
            }
            return { role: role, content: messageObject.message }
        });

        const systemMessages = {
            role: 'system',
            content: 'Explain all content as it is been asked'
        }

        const apiRequestBody ={
            'model': 'gpt-3.5-turbo',
            'messages': [
                systemMessages,
                ...apiMessages
            ]
        };

        await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + API_KEY,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data.choices[0].message.content)
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: 'ChatGPT'
                }]
            );
            setTyping(false);
        });
    }


    return(
        <div className='chatbot' style={{ marginTop:"80px"}}>
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

            <div class="footer" style={{position:"fixed", bottom:"0", right:"0", left:"0", marginTop:"20px"}}>
                &copy; 2023 Swift<span style={{color:"blue"}}>Chat</span>. All rights reserved.
            </div>
        </div>
    );
}

export default ChatBot;