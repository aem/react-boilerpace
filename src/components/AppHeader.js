import cxs from 'cxs';
import { Link } from 'react-router';
import React, { Component } from 'react';

import { css } from '../lib/constants';

export default class RouterContainer extends Component {
  render() {
    const className = cxs({
      [`html, body, header, nav, section, article, div, p, span, h1, h2, h3, h4, h5,
      h6, textarea, input, button, form, ul, ol, li, a, blockquote, canvas, footer, label,
      select, option, strong, em, i, b, table, tbody, thead, td, th, tr, u`]: {
        color: css.black,
        fontFamily: css.fontFamily
      },
      'pre, code': {
        color: css.black,
        fontFamily: css.fontFamilyMono
      }
    });
    return (
      <div className={className} >
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        {this.props.children}
      </div>
    );
  }
}
