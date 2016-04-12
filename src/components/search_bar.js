import React, { Component } from 'react';

//Functional components
// const SearchBar  = () => {
  // return <input />;
// }

//extends works like enhiretance
//only used when need to access state
class SearchBar extends Component {
  // State definition on class based component
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
//controlled component. The value changes when the state changes.
  render() {
    return (
      <div>
        <input
           value={this.state.term}
           onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
