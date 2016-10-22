var axios = require('axios');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const APP_ID = '0f50a2aeb1c1475514f3ec4e4dd92840';
const UNIT = 'imperial'
const OPEN_WEATHER_MAP_URL =  `${BASE_URL}?appid=${APP_ID}&units=${UNIT}`;

module.exports = {
  getTemerature: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl)
    .then(function (res) {
      return res.data.main.temp;
    }, function (res) {
      if(res.cod === "502") {
        throw new Error('City Not Found');
      }
      throw new Error(res);
    });
  }
};
