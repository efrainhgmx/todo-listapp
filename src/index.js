import React from 'react';
import ReactDOM from 'react-dom';
const name  = 'Joseph Santana';
const h1 = <h1>Hello { name } I'm very happy to see you here</h1>

ReactDOM.render(
    h1,
    document.querySelector('#root')
    );