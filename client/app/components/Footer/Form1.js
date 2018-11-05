import React from 'react';
import '../../styles/vendor/Form1.css';

const Form1 =({value, onChange, onCreate, onKeyPress}) => {
  return(
    <scrollbar>
    <div className="formss">
    <input className="valuess" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
    <a className="create-button1ss" onClick={onCreate}>
    Add to list
    </a>
    </div>
    </scrollbar>

  );
};

export default Form1;
