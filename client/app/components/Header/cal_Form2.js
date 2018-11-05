import React, { Component } from 'react';
import '../../styles/vendor/cal_Form2.css';

const Form2 = ({onChange1,onChange2,hour,minute}) =>{
    return(
        <div className = "form2s">
            <a>
                <input value = {hour} onChange={onChange1} placeholder="H"/>
            </a>
            <b>  :  </b>
            <a>
                <input value = {minute} onChange={onChange2} placeholder="M"/>
            </a>
        </div>
    );
};

export default Form2;