import React, { Component } from 'react';
import '../../styles/vendor/cal_Form.css';


const Form = ({value,onChange,onKeyPress}) =>{
    return(
        <div className = "form">
            <input value = {value} onChange = {onChange} onKeyPress = {onKeyPress}/>
        </div>
    );
};

export default Form;