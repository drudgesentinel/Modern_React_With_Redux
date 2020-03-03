import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  //automatically called on class instance creation
  constructor(props) {
    super(props);
  }
  //without render method, error will be thrown
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
