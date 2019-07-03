import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {

  state = {
    persons: [
      {id:"jhgs", name:"Helena",age:26},
      {id:"grtg", name:"Kevin",age:27},
      {id:"sgrs", name:"Paul",age:28}
    ],
    otherState: "this is another state",
    showPersons: false
  }

  changeInputHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex((el) => {return el.id===id});
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  deletePersonHandler = (i) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(i,1);
    this.setState({persons:persons}); 
  }

  togglePersonHandler = () =>   {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render() {

    let style={
      background:"green",
      color:'white',
      display: 'block',
      border: 'none',
      height: '45px',
      lineHeight: '45px',
      margin: "20px auto",
      cursor: "pointer"
    }

    let person = null;

    if (this.state.showPersons) {
      person = (
          <div>
            {this.state.persons.map((el,index) => {return (
              <Person 
                click={() => this.deletePersonHandler(index)} 
                name={el.name} 
                age={el.age}
                key ={el.id}
                input={(event) => this.changeInputHandler(event,el.id)}
              />)})}              
          </div>
        );
      style.background = "red";
     }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return(
        <div className="App">
        <h1>This is a react component</h1>
        <p className={classes.join(' ')}>Sample paragraph</p>
        <button 
          style={style} 
          onClick={this.togglePersonHandler}>TOGGLE VIEW
        </button>
        {person}
        </div>
      )
  }
}


export default App;
