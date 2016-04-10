import React from 'react';
import ReactDOM from 'react-dom'

//This is the class declaration
const App = () => {
  //When doing jsx we actually instantiate this class
  return <div>Hi!</div>;
}

//It is a now a separate library that renders the react components
ReactDOM.render(<App />, document.querySelector('.container'));
