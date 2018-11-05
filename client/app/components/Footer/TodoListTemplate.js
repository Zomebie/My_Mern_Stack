import React from 'react';
import '../../styles/vendor/TodoListTemplate.css'
import '../../styles/vendor/Footer.css';
const TodoListTemplate = ({form,children}) =>{
  return(
    <main className="todo-list-template">
    <div className="title">
      Message List
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
      <div className = "Copys1">Copyright ⓒ 2018. 첫째들, bit-academy all rights reserved</div>
    </main>
  );
};

export default TodoListTemplate;
