import React, { useState, useRef } from 'react';
import { TodoList  } from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

export const App = () => {
    const [todos, setTodos] = useState([{id: 1, task: "Tarea 1", completed: false }]);
    const todoTaskRef = useRef();

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;

        if(task === '') return;

        setTodos((prevTodos) => {
            return[...prevTodos, {id: uuidv4(), task, completed: false}];
        })

        todoTaskRef.current.value = null;

    };

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }


    return (
        <>
            <TodoList todos={ todos } toggleTodo={ toggleTodo }/>
            <input ref={ todoTaskRef } type="text" placeholder="Nueva tarea" />
            <button onClick={ handleTodoAdd }>📝</button>
            <button>🗑</button>
            <div>Te quedan { todos.filter((todo) => !todo.completed).length } tareas por hacer.</div>
        </>
        
    )
}
