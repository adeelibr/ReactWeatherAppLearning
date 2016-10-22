import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

import openWeatherMap from '../api/openWeatherMap';

let WeatherPage = React.createClass({

  getInitialState() {
    return {
      isLoading: false
    }
  },

  handleSearch(location) {
    var that = this;
    this.setState({ isLoading: true });
    openWeatherMap.getTemerature(location)
    .then(function (temperature) {
      that.setState({
        isLoading: false,
        location,
        temperature: temperature
      });
    }, function (error) {
      that.setState({ isLoading: false });
      alert(error);
    });
  },

  render() {
    var {isLoading, location, temperature} = this.state;

    let renderMessage = () => {
      if (isLoading) {
        return <p>Fetehing weather...</p>
      } else if (location && temperature) {
        return <WeatherMessage location={location} temperature={temperature} />
      }
    }

    return (
      <div>
        <h2 className="text-center">Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }

});

export default WeatherPage;
