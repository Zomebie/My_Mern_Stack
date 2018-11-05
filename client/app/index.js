import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import './index.css';
import App from './components/App/App';

import './styles/styles.scss';

render((
  <Router>
    <App/>
  </Router>
), document.getElementById('app'));

document.body.addEventListener("scroll", () => {

  console.log("scroll event outside ")

});

