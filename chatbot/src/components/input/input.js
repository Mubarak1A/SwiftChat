import React from 'react';
import './input.css'

const Input = ({ onInput, onButtonClick }) => {
    return(
        <div className='input'>
            <div className='input'>
                <p>Input:</p>
                <input type='text' className='text-box' onChange={onInput}/>
                <button id='send-button' onClick={onButtonClick}>SEND</button>
            </div>
        </div>
    );
}

export default Input;