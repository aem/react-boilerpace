import { IndexRoute, Route } from 'react-router';
import React from 'react';

import AppHeader from 'components/AppHeader';
import HomePageContainer from 'containers/HomePageContainer';

const Page1 = props => <div>page 1</div>;
const Page2 = props => <div>page 2</div>;

export default (
  <Route path="/" component={AppHeader}>
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <IndexRoute component={HomePageContainer} />
  </Route>
);
