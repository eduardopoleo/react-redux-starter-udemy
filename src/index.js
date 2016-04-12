import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBeh-TcfMbBgU-Xx3YZqsbvPW3hCSeos8Q'

//This is the class declaration
const App = () => {
  //When doing jsx we actually instantiate this class
  return(
    <div>
      <SearchBar />
    </div>
  )
}

//It is a now a separate library that renders the react components
ReactDOM.render(<App />, document.querySelector('.container'));
