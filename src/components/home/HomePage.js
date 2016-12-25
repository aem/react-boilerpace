import React, { Component, PropTypes } from 'react';

export default class TextDisplay extends Component {
  static propTypes = {
    test: PropTypes.object.isRequired,
    updateText: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const { test, updateText } = this.props;

    return (
      <section>
        <h1>Welcome!</h1>
        <h2>{test.rootText}</h2>
        <textarea onChange={(e) => updateText(e.target.value)} defaultValue={test.rootText} />
        <div className="css-image" />
      </section>
    );
  }
}
