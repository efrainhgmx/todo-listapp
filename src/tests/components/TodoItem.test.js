import React  from 'react';
import { v4 as uuidv4 } from 'uuid';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoItem } from '../../components/TodoItem';

describe('Test on <TodoItem /> component', () => {
    test('Id should be the same as task', () => {
        const list = [{id: uuidv4(), task: "Tarea", completed: false }];
        const key = list.id;
        const wrapper = shallow( <TodoItem key={ key } todo={ list }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( key ).toBe( list.id );
    })
    
})
