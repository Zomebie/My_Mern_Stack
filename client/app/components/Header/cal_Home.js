import React, { Component } from 'react';
import 'whatwg-fetch';

import TodoListTemplates from './cal_TodoListTemplate';
import Form from './cal_Form';
import Form2 from './cal_Form2';
import CheckBoxForm from './cal_CheckBoxForm';
import LateButton from './cal_LateButton';
import '../../styles/vendor/cal_Home.css';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            hour: 0,
            minute: 0,
            result:'',
            mutiple1: 1,
            mutiple2: 1,
            mutiple3: 1,
            cb1:false,
            cb2:false,
            cb3:false,
        };
        this.getHour = this.getHour.bind(this);
        this.getMinute = this.getMinute.bind(this);
        this.Show =this.Show.bind(this);
        this.myCallback1 = this.myCallback1.bind(this);
        this.myCallback2 = this.myCallback2.bind(this);
        this.myCallback3 = this.myCallback3.bind(this);
    }

    getHour(e){

        this.setState({
            hour: (1000+(e.target.value*100*60))*4,
        });

    }

    getMinute(e){

        this.setState({
            minute: (1000+(e.target.value*100))*4,
        });

      }

    myCallback1(e1){

        this.setState({
            mutiple1 : e1
        });

    }

    myCallback2(e2){

        this.setState({
            mutiple2 : e2
        });

    }

    myCallback3(e2){

        this.setState({
            mutiple3 : e2
        });

    }

    Show(){

      this.setState({
          result: (this.state.hour + this.state.minute )* this.state.mutiple1 * this.state.mutiple2 * this.state.mutiple3
      });

       fetch(`/api/cal/${(this.state.hour + this.state.minute )* this.state.mutiple1 * this.state.mutiple2 * this.state.mutiple3}`,{method: 'PUT'})
       .then(res=> res.json())
       .then(json => {

        

     }); //callback


    }


    render(){
        return (
        <TodoListTemplates
        form={<Form value={this.state.result}/>}
        form2={<Form2 onChange1={this.getHour} onChange2={this.getMinute}/>}
        cbform={<CheckBoxForm
            cb1={this.state.cb1}
            cb2={this.state.cb2}
            cb3={this.state.cb3}
            callbackFromParent1={this.myCallback1}
            callbackFromParent2={this.myCallback2}
            callbackFromParent3={this.myCallback3}
        />}
        lateButton={<LateButton onClick={this.Show} />}>
        </TodoListTemplates>
        );
    }
}

export default Home;
