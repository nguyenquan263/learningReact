//OLD REACT IMPORTING
// import React, { Component } from 'react';

//NEW REACT IMPORT
import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

//OLD COMPONENT CODE
// class App extends Component {
//   state = {
//     persons: [
//       {name: 'Quan', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Thu', age: 22},
//     ],
//     otherState: 'some other state'
//   }

//   switchNameHandler = () => {
//     //console.log("clicked, hihi");
//     //DONT FUCKING DO THIS - this.state.persons[1] = "Liem";
//     this.setState({
//       persons: [
//         {name: 'A', age: 28},
//         {name: 'B', age: 29},
//         {name: 'C', age: 22},
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, my name is Tim.</h1>
//         <p>This is working</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

//       </div>
//     );  
//   }
// }

// export default App;

//NEW COMPONENT CODE
const app = (props) => {

  //useState WILL BE ASSIGNED TO AN ARRAY WITH ONLY 2 ELEMENTS.
  const [personsState, setPersonsState] = useState({
    persons: [
        {name: 'Quan', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Thu', age: 22},
    ],
    otherState: 'some other state'
  });

  const [otherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    //console.log("clicked, hihi");
    //DONT FUCKING DO THIS - this.state.persons[1] = "Liem";
    setPersonsState({
      persons: [
        {name: newName, age: 28},
        {name: 'B', age: 29},
        {name: 'C', age: 22},
      ],
      
      //STATE WILL BE REPLACED WHEN SWITCHING, SO SET IT AGAIN
      otherState: personsState.otherState
    });
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'A_', age: 28},
        {name: event.target.value, age: 29},
        {name: 'C_', age: 22},
      ],
      otherState: personsState.otherState
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Hello, my name is Tim.</h1>
      <p>This is working</p>
      <button style={style} onClick={switchNameHandler.bind(this, "Bark")}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        click={switchNameHandler.bind(this, 'Jerry')}
        changed={nameChangeHandler}
      />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
      />
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
      />

    </div>
  );  
  
}

export default app;
