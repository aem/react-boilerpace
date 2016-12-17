import { IndexRoute, Link, Route } from 'react-router';
import React from 'react';

const Root = props => <div>hello<Link to="/page1">Page 1</Link><Link to="/page2">page 2</Link>{props.children}</div>;
const Page1 = props => <div>page 1</div>;
const Page2 = props => <div>page 2</div>;

export default (
  <Route path="/" component={Root}>
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <IndexRoute component={null} />
  </Route>
);
