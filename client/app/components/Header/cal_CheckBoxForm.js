import React, { Component } from 'react';
import '../../styles/vendor/cal_CheckBoxForm.css';

class CheckBoxForm extends Component{

    constructor(props){

        super(props);
        this.handleChecking1 = this.handleChecking1.bind(this);
        this.handleChecking2 = this.handleChecking2.bind(this);
        this.handleChecking3 = this.handleChecking3.bind(this);

        this.state={
            cb1: !this.props.cb1,
            cb2: !this.props.cb2,
            cb3: !this.props.cb3,
        }

    }
        
    handleChecking1(){

        let mutiple1 = 4;

        this.setState({
            cb1: !this.state.cb1
        });
 
        if(this.state.cb1){
            this.props.callbackFromParent1(mutiple1);
        }else if(!this.state.cb1){
            this.props.callbackFromParent1(1);
            return;
        }
        
    }

    handleChecking2(){

        let mutiple2 = 4;

        this.setState({
            cb2: !this.state.cb2
        });
 
        if(this.state.cb2){
            this.props.callbackFromParent2(mutiple2);
        }else if(!this.state.cb2){
            this.props.callbackFromParent2(1);
            return;
        }
        
    }

    handleChecking3(){

        let mutiple3 = 2;

        this.setState({
            cb3: !this.state.cb3
        });
 
        if(this.state.cb3){
            this.props.callbackFromParent3(mutiple3);
        }else if(!this.state.cb3){
            this.props.callbackFromParent3(1);
            return;
        }
        
    }

    render(){
        
        const {cb1,cb2,cb3} = this.props;
        return (
        <div className = "todo-items">
            
            <input id="cb1" type="checkbox" onChange={this.handleChecking1} defaultChecked={cb1} />
            <label for="cb1" className="lbl">
            <span>반장</span>
            </label>
            
            <input id="cb2" type="checkbox" onChange={this.handleChecking2} defaultChecked={cb2}/>
            <label for="cb2" className="lbl">
            <span>팀장</span>
            </label>

            <input id="cb3" type="checkbox" onChange={this.handleChecking3} defaultChecked={cb3}/>
            <label for="cb3" className="lbl">
            <span>부팀</span>
            </label>

            <input id="cb4" type="checkbox"/>
            <label for="cb4" className="lbl">
            <span>팀원</span>
            </label>

        </div>
        );
    }
}

export default CheckBoxForm;