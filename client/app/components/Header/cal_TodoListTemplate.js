import React from 'react';
import '../../styles/vendor/cal_TodoListTemplate.css';


const TodoListTemplates = ({form, form2, lateButton,cbform,onCreate,onKeyPress,onChange,hours,minute}) => {
    return (
        <main className = "todo-list-templates">
            <div className = "titles">
            Show me how lazy you are
            </div>

            <div className = "restOfBodys">
            <section className = "form2-wrappers">
            {form2}
            </section>
            <section className = "checkbox-wrappers">
            {cbform}
            </section>
            <section className = "form-wrappers">
            {form}
            </section>
            <section className = "button-wrappers">
            {lateButton}
            </section>
            <div className = "Copys">Copyright ⓒ 2018. 첫째들, bit-academy all rights reserved</div>
            </div>
        </main>

    );
}

export default TodoListTemplates;