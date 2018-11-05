import React, { Component } from 'react';
import '../../styles/vendor/app.css';
import Header from '../Header/cal_Home';
import Footer from '../Footer/Footer';
import { Element, Link } from 'react-scroll';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

render() {
    return (
      <div>
        <div className="nav">
            <Link to="test1" spy={true} smooth={true} duration={500} offset={-50}>
            &nbsp; &nbsp; Calculator
            </Link>
            <a> &nbsp; &nbsp; | &nbsp; &nbsp; </a>
            <Link to="test2" spy={true} smooth={true} duration={500} offset={-50}>
            ToDoList
            </Link>
        </div>

        <Element name="test1" className="fake-height">
        <div className="t1"><Header /></div>
        </Element>
        <Element name="test2" className="fake-height">
        <div className="t2"><Footer /></div>
        </Element>



      </div>
    );
  }
}

export default App;
