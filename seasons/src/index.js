import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  //automatically called on class instance creation
  constructor(props) {
    //super is required
    super(props);
    //Only acceptable direct assignment to this.state is inside constructor
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
  (position) => {
    //use setState, not direct assignment except in constructor function
    this.setState({ lat: position.coords.latitude});
  },
  (err) => {
    this.setState({ errorMessage: err.message });
  }
);
  }

  //without render method, error will be thrown
  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat){
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
