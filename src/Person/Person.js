import React from 'react';
import './Person.css';

const Person = props => {

	return (
		<div className="person">
		<h1 onClick={props.click}>{props.name}</h1>
		<p>Age: {props.age}</p>
		<input type="text" value={props.name} onChange={props.input}/>
		</div>
		)
}


export default Person;