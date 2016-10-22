import React from 'react';

let ErrorModal = React.createClass({
  getDefaultProps() {
    return {
      title: 'Error'
    };
  },
  propTypes() {
    title: React.PropTypes.string;
    message: React.PropTypes.string.isRequired;
  },
  componentDidMount() {
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render() {
    let {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny" data-reveal="">
        <h4 className="text-center">{title}</h4>
        <p>{message}</p>
      <button className="button hollow" data-close="">Okay</button>
      </div>
    );
  }
});

export default ErrorModal;
