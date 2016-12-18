import { IndexRoute, Route } from 'react-router';
import React from 'react';

import GlobalWrapper from 'containers/RouterContainer';
import TextDisplay from 'containers/TextDisplay';

const Page1 = props => <div>page 1</div>;
const Page2 = props => <div>page 2</div>;

export default (
  <Route path="/" component={GlobalWrapper}>
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <IndexRoute component={TextDisplay} />
  </Route>
);
