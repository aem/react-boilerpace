import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';

export default class RouterContainer extends Component {
  static childContextTypes = {
    isLoaded: PropTypes.bool.isRequired
  };

  getChildContext = () => ({
    isLoaded: true
  });

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        {this.props.children}
      </div>
    );
  }
}
