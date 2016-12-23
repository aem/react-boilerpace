# react-boilerplate
My own personal React boilerplate. This is a combination of me trying to get a better understanding of React, Redux, and wanting to learn webpack.

## To use this boilerplate
Requirements:
* Node v6+
* [Yarn](https://yarnpkg.com) (NPM will do fine, but seriously, use Yarn)

```bash
mkdir my-first-app
git clone git@github.com:aem/react-boilerplate
cp -r react-boilerplate/ my-first-app/
cd my-first-app
yarn
npm start
```

## Project Features
This boilerplate project has a few nice things over other webpack/React/Redux boilerplates
* Isomorphic rendering to improve initial load/paint times while still giving you all of the benefits of React
* SCSS/CSS support by default, no extra config required
  * CSS styles are minified and inlined to support quicker load times and reduce external dependencies
* Image support by default
  * Images use absolute URLs rather than relative URLs to prevent images becoming unlinked if your directory structure changes
  * Images aren't Base64 converted and inlined into the JS bundle, but rather loaded asynchronously from the server to avoid bloating of the JS file and improve load times
* Simple example components that are easily understandable and easy to replace when you're ready to start writing code

## Project Structure

### Component Types
There are four main types of module in a React-Redux application: `Component`, `Container`, `Reducer`, and `Action`. `Reducer`s and `Actions` handle data, while `Component`s and `Container`s manage presentation.

#### `Action`
The action is the root of a react-redux app. Actions, called within `Container`s and `Component`s, mutate the application state. An action can either be synchronous or asynchronous, in the latter case utilizing `redux-thunk` to run actions on a delay, most commonly used to handle API requests and responses. More information on actions is available [here](http://redux.js.org/docs/basics/Actions.html) in the official docs.

#### `Reducer`
Reducers represent the application state and are updated by actions. Under the Redux model, the entire application state is kept in one large JavaScript object, meaning the entire application always has access to a complete view of the application state. For convenience, Redux allows us to use multiple small reducers and combine them into one large state object.

Reducers should be "pure functions," meaning a reducer has no side-effects, such as making API calls, and should not mutate any application state. A reducer should always return a brand new state object. In this application, immutability and purity are enfored through the usage of [Immutable.js](https://facebook.github.io/immutable-js/). Read the [official Redux docs](http://redux.js.org/docs/basics/Reducers.html) for more information on Reducers.

#### `Container`
Containers are purely for managing application logic and state. Containers should never render any visual HTML elements, they should only `connect` to `Component`s which in turn will render the application's visuals. The primary use of `Container`s is to connect to the application state and actions via `react-redux`'s [`connect` function](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options). 

Since containers are the only components which should be updating/interacting with the application state, if `Component`s need to update the state it should be done with callback functions passed through `props` or `context`, or by simply passing the `action`s themselves through `props`. 

#### `Component`
Components, the last type of module, are where the application's visuals are actually managed. Components render a combination of HTML elements and other Components to create the true visual look of the application. For any component that interacts with the application state, this should only be done through a callback passed in from a container. 

### Debugging
Install the [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) and the [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en). Both of these applications install as Chrome extensions and are hugely helpful in debugging React applications. _Note that the Redux Dev Tools only load in Development._ 

### Other Reading
* [React-Redux](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)
* [React](https://facebook.github.io/react/docs/getting-started.html)
* [Redux](http://redux.js.org/docs/introduction/index.html)
* [Immutable.js](https://facebook.github.io/immutable-js/)
* [webpack](https://webpack.js.org)
* [Babel](https://babeljs.io)
