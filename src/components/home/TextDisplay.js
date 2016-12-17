import React, { Component, PropTypes } from 'react';

export default class TextDisplay extends Component {
  static contextTypes = {
    isLoaded: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <section>
        <h1>Welcome!</h1>
        <h2>{this.state.text}</h2>
        <textarea onChange={(e) => this.setState({text: e.target.value})} />
        <h5>If a value appears below, then context is working properly!</h5>
        <p>{this.context.isLoaded ? 'true' : ''}</p>
      </section>
    );
  };
}
