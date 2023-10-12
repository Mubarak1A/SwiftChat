import React from 'react';
import './output.css'

const Output = ({ output }) => {
    if (output){
        return(
            <div className='output'>
                <div className='output'>
                    <p>Output:</p>
                    <div className='output-box'>{output}</div>
                </div>
            </div>
        );
    }
    else {
        <div></div>
    }
}

export default Output;