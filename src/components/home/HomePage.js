import React, { Component, PropTypes } from 'react';
import developers from '../../images/developers.jpg';

export default class TextDisplay extends Component {
  static propTypes = {
    test: PropTypes.object.isRequired,
    updateText: PropTypes.func.isRequired
  };

  render() {
    const { test, updateText } = this.props;

    return (
      <section>
        <h1>Welcome!</h1>
        <h2>{test.rootText}</h2>
        <textarea onChange={(e) => updateText(e.target.value)} defaultValue={test.rootText} />
        <img width="150" src={developers} />
      </section>
    );
  }
}
