import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const person = {
    name: 'Joseph',
    lastName: 'Santana',
    age: 36,
    city: 'Madrid'
};

const Welcome = (props) => {
    return <p>Welcome { props.name } enjoy this app!</p>;
}

let h1Class = 'user-wave';

const formatUser = ({name, lastName, age, city }) => `Hello Mr. ${lastName} ${name}.
I known your age is ${age} and you live in ${city}.`;

ReactDOM.render(
    <div>
        <h1 className={ h1Class } id="wave">{formatUser(person)}</h1>
        <Welcome name={ person.name }/>
    </div>,
    document.querySelector('#root')
    );