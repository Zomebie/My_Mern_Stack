import React, { Component } from 'react';
import TodoListTemplate from './TodoListTemplate';
import Form1 from './Form1';
import TodoItemList from './TodoItemList';
import 'whatwg-fetch';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.id = 0
    this.state ={

    removeid:0,
    input: '',
    todos: []

  };

  this.handleChange = this.handleChange.bind(this);
  this.handleCreate = this.handleCreate.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);
  this.handleRemove =this.handleRemove.bind(this);
  this.handleToggle = this.handleToggle.bind(this);
}

componentDidMount() {
  fetch('/api/todo-lists')
    .then(res  => res.json())
    .then(json =>{

    const value=[];
    for(var key in json) {

       value.push(json[key]);

    }



  const value2=[];
  const remove=[];
  for(var ke in value) {

    value2.push(value[ke].todolist);
    remove.push(value[ke]._id);
  }


  this.setState({
    removeid:remove


  })

var value3=[];

for(var k in value2) {

  value3=value3.concat({

  id:this.id++,
  text:value2[k],
  checked:false

  });

}



this.setState({

   todos:value3

})

    });
}

handleChange(e){
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate(){

    const { input, todos } = this.state;

      // async call back
    fetch(`/api/todo-lists/${input}`,{method: 'PUT'}) // document생성
    .then(res=> res.json())
    .then(json => {

      this.setState({

      input:'',// 인풋 비우고
        // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id:this.id++,
        text:input,
        checked:false

      })

    });

    });

  }

  handleKeyPress(e){
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle(id){
  const{todos} = this.state;
  //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾습니다.
  const index = todos.findIndex(todo => todo.id === id);
  const selected = todos[index]; // 선택한 객체

  const nextTodos = [...todos]; //배열을 복사

  //기존의 값들을 복사하고 , checked 값을 덮어쓰기
  nextTodos[index] = {
    ...selected,
    checked: !selected.checked
  };//{...selected}라고 넣은것은, 내부의 값들이 모두 자동으로 props로 설정이 됨.

  this.setState({
    todos: nextTodos
  });
}



handleRemove(id){

    const {todos} = this.state;

    fetch(`/api/todo-lists/${this.state.removeid[id]}`, { method: 'DELETE' })
      .then(_ => {



        this.setState({
          todos: todos.filter(todo => todo.id !== id)
        });

      });


  }

    render(){
      const { input, todos } =this.state;
    const {//비구조화 할당-> 이렇게 함으로써 this를 붙여줘야하느 작업을 생략 할 수 있음.
      handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove
    } = this;
      return(

        <TodoListTemplate form={(
            <Form1
            value = {input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            />
          )}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>

          </TodoListTemplate>


        );
    }
}


export default Footer;
