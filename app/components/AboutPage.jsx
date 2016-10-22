import React from 'react';

let AboutPage = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React. The overall UI
      was designed using Foundation CSS</p>
      <p>Here are some of the tools I used.</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
          JavaScript library used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
          Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
