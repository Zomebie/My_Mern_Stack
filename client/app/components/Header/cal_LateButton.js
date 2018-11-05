import React, { Component } from 'react';
import '../../styles/vendor/cal_LateButton.css';

const LateButton = ({onClick}) =>{
    return(
        <div className = "lateButton" onClick={onClick}>
            How much? 
        </div>
    );
};

export default LateButton;