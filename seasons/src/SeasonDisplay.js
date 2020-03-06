import './SeasonDisplay.css'
import React from 'react';
//typical convention indicates that config/helper functions at top
//component at the bottom
const seasonConfig = {
  summer: {
    seasonText: 'Let\'s hit the beach!',
    seasonIcon: 'sun'
  },
  winter: {
    seasonText: 'Burr it\'s cold!',
    seasonIcon: 'snowflake'
  }
};

const getSeason = (lat, month) => {
if (month > 2 && month < 9) {
  return lat > 0 ? 'summer' : 'winter';
} else {
  return lat < 0 ? 'winter' : 'summer';
}
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonText, seasonIcon } = seasonConfig[season];
  console.log(seasonConfig[season]);

  return (
    <div className={`season-display ${season}`}>
    <i className={`${seasonIcon} icon massive icon-left`}/>
     <h1>{seasonText}</h1>
    <i className={`${seasonIcon} icon massive icon-right`}/>
    </div>
  );

};

export default SeasonDisplay;
