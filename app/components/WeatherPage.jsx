import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';

import openWeatherMap from '../api/openWeatherMap';

let WeatherPage = React.createClass({

  getInitialState() {
    return {
      isLoading: false
    }
  },

  componentDidMount() {
    let location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps(newProps) {
    let location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  handleSearch(location) {
    var that = this;
    this.setState({
      isLoading: true,
      location: undefined,
      temp: undefined,
      errorMsg: undefined
    });
    openWeatherMap.getTemerature(location)
    .then(function (temperature) {
      that.setState({
        isLoading: false,
        location,
        temperature: temperature
      });
    }, function (e) {
      console.log(e);
      that.setState({
        isLoading: false,
        errorMsg: e.message
      });
    });
  },

  render() {
    var {isLoading, location, temperature, errorMsg} = this.state;

    let renderMessage = () => {
      if (isLoading) {
        return <p className="text-center">Fetching weather...</p>
      } else if (location && temperature) {
        return <WeatherMessage location={location} temperature={temperature} />
      }
    }

    let renderError = () => {
      if (typeof errorMsg === 'string') return <ErrorModal message={errorMsg}/>
    }

    return (
      <div>
        <h2 className="text-center page-title">Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }

});

export default WeatherPage;
