import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

const API_KEY = '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'

const ChatBot = ({ onInput, onButtonClick }) => {
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
            content: 'Explain all content like i am 10 years old'
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
        <div className='chatbot' style={{ height:'100%'}}>
            <div style={{ position:'relative', height:'100%', width:'70%', margin:'auto' }}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList
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
        </div>
    );
}

export default ChatBot;