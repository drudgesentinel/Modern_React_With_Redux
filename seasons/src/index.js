import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
  //automatically called on class instance creation
  //do not do data loading in the constructor; use componentDidMount method instead (best practices/readability)
  constructor(props) {
    //super is required
    super(props);
    //Only acceptable direct assignment to this.state is inside constructor
    //this.state = { lat: null, errorMessage: '' };
  }

//State can also be initialized like this:
  state = { lat: null, errorMessage: ''};


componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
  //use setState, not direct assignment except in constructor function
  position => this.setState({ lat: position.coords.latitude}),
err => this.setState({ errorMessage: err.message })
);
}
  //without render method, error will be thrown
  //render is only for returning JSX
  //avoid conditionals in the render method
  renderContent() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept the location request"/>;
  }

  render() {
  return (
    <div className="border red">
    {this.renderContent()}
    </div>
  );
}
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
