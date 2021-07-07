import React from 'react';

export const TodoList = ({ todos }) => {
    return (
        <ul>
            { todos.map((todo) => (
                <li>Tarea</li>
            )) }
        </ul>
    )
}
