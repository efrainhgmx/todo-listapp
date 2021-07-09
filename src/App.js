import React, { useState, useRef, useEffect } from 'react';
import { TodoList  } from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const KEY = "todoApp.todos";

export const App = () => {
    const [todos, setTodos] = useState([]);
    const todoTaskRef = useRef();
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

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

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }


    return (
        <main>
            <h1>Lista de Tareas</h1>
            <TodoList todos={ todos } toggleTodo={ toggleTodo }/>
            <input className="input-text" ref={ todoTaskRef } type="text" placeholder="Nueva tarea" />
            <button onClick={ handleTodoAdd }>📝</button>
            <button onClick={ handleClearAll }>🗑</button>
            <p>Te quedan { todos.filter((todo) => !todo.completed).length } tareas por hacer.</p>
        </main>
        
    )
}
