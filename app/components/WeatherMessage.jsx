import React from 'react';

let WeatherMessage = ({temperature, location}) => {
  // var {location, temperature} = props;
  return (
    <div>
      <p>It is {temperature} in {location}.</p>
    </div>
  );
};

export default WeatherMessage;
