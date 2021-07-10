import React  from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { App } from '../App';

describe('Test on <App /> component', () => {
    test('Should be match with the snapshoot', () => {
      const wrapper = shallow( <App /> );
      
      expect( wrapper ).toMatchSnapshot();
    });
    
})
