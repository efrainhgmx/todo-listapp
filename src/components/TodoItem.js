import React from 'react'

export const TodoItem = ({ todo, toggleTodo }) => {
    const {id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    }

    return (
        <li>
            <input type="checkbox" id={ id } checked={ completed }  onChange={ handleTodoClick }/>
            <label for={ id }>{ task }</label>
        </li>
    )
}
