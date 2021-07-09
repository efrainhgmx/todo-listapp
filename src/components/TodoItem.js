import React from 'react'

export const TodoItem = ({ todo, toggleTodo }) => {
    const {id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    }

    return (
        <li>
            <input className="custom-radio-checkbox__input" type="checkbox" checked={ completed }  onChange={ handleTodoClick }/>
            <span className="custom-radio-checkbox__show custom-radio-checkbox__show--checkbox"></span>
            <span className="custom-radio-checkbox__text">{ task }</span>
        </li>
    )
}
