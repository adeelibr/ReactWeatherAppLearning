import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

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
    let $modal = $(ReactDOMServer.renderToString(this.modalRender()));
    $(ReactDOM.findDOMNode(this)).html($modal);
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  modalRender() {
    let {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny" data-reveal="">
        <h4 className="text-center">{title}</h4>
        <p>{message}</p>
      <button className="button hollow" data-close="">Okay</button>
      </div>
    );
  },

  render() {
    return (<div></div>);
  }
});

export default ErrorModal;
