import React  from 'react';
import { v4 as uuidv4 } from 'uuid';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoList } from '../../components/TodoList';

describe('Test on <TodoList /> components', () => {
    test('Should be have the same lenght of task list', () => {
        const todos = [{id: uuidv4(), task: "Tarea 1", completed: false },{id: uuidv4(), task: "Tarea 2", completed: false}];
        const wrapper = shallow( <TodoList todos={ todos }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( todos.length ).toBe(2);
    });
    
})
