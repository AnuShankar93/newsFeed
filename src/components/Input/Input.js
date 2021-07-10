import React from 'react';
import './input.scss';

const Input = () => {
    return(
        <div className="input-wrapper">
            <i className="icon fas fa-search"></i>
            <input type="email" className="input-box" 
                placeholder="Search" id="email" 
            />
        </div>

    )
}

export default Input;