import React from 'react';

let WeatherForm = React.createClass ({

  onFormSubmit: function (e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search Weather By City"/>
          <button type="submit" className="expanded hollow button">Get Weather</button>
        </form>
      </div>
    );
  }

});

export default WeatherForm;
