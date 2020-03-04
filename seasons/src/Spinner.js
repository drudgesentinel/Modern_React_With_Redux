import React from 'react';

const Spinner = props => {
  return (
  <div className="ui active dimmer">
    <div className="ui big text loader">
      {props.message}
    </div>
  </div>
);
};

Spinner.defaultProps = {
  //this can also be accomplished via an '||' for example:
  //{props.message || 'Loading...'} but this is not best practice
  message: 'Loading...'
};

export default Spinner;
