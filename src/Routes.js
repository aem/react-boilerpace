// import { IndexRoute, Route } from 'react-router';
// import React from 'react';

// const AppHeader = './components/AppHeader';
// const HomePageContainer = './containers/HomePageContainer';

// const Page1 = () => <div>page 1</div>;
// const Page2 = () => <div>page 2</div>;

// const loadRoute = (path) => import(path).then((module) => module.default);

// export default (
//   <Route path="/" component={loadRoute(AppHeader)} >
//     <Route path="/page1" component={Page1} />
//     <Route path="/page2" component={Page2} />
//     <IndexRoute component={loadRoute(HomePageContainer)} />
//   </Route>
// );

import { IndexRoute, Route } from 'react-router';
import React from 'react';

import AppHeader from './components/AppHeader';
import HomePageContainer from './containers/HomePageContainer';

const Page1 = () => <div>page 1</div>;
const Page2 = () => <div>page 2</div>;

export default (
  <Route path="/" component={AppHeader} >
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <IndexRoute component={HomePageContainer} />
  </Route>
);
