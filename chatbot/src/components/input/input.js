import React from 'react';
import './input.css'

const Input = () => {
    return(
        <div className='input'>
            <div className='input'>
                <p>Input:</p>
                <input type='text' className='text-box'/>
                <button id='send-button'>SEND</button>
            </div>
        </div>
    );
}

export default Input;