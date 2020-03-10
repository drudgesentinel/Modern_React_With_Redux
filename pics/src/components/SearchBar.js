import React from 'react';

//onClick => When an element is clicked
//onChange => when text is typed into an input
//onSubmit => coat hanger principle, for forms

class SearchBar extends React.Component {
state = { term: ''};
//function keyword will break 'this'
//either use arrow functions, or call 'this.functionName = this.functionName.bind(this)' inside the constructor
onFormSubmit = (event) => {
  //prevents default form behavior, automatic submission on enter press
  event.preventDefault();
  //handle props, 'Invoking Callbacks in Children(submit form to parent)'
  this.props.onSubmit(this.state.term);
};

  render() {
    return(
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        <div className = "field">
        <label> Image Search </label>
        <input type="text"
        value={this.state.term}
        onChange={(e) => this.setState({term: e.target.value})}/>
        </div>
        </form>
    </div>
  );
  }
}

export default SearchBar;
