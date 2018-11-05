import React,{Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{



  render(){
    /* 3가지의 props를 받게됩니다.
        todos : todo객체들이 들어있는 배열
        onToggle: 체크박스를 키고 끄는 함수
        onRemove: 아이템을 삭제시키는 함수
      */
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id,text,checked}) => (
        <TodoItem
         id={id}
         text={text}
         checked = {checked}//{...todo} 을 사용한다면 여기서부터 위까지는 안써도 무방함 자동으로 props로 설정됨.
         onToggle = {onToggle}
         onRemove = {onRemove}
         key = {id}
         />
      )
    );
    return (
      <div>
       {todoList}
      </div>
    );
  }
}

export default TodoItemList;
