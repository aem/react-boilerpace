import { createStore } from 'redux';
import express from 'express';
import fs from 'fs';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import routes from '../src/Routes';
import { store, extras } from '../src/lib/store';
import sass from 'node-sass';

let style = '';
sass.render({file: 'src/style/index.scss'}, (err, result) => {
  if (!err) {
    style = result.css.toString();
  }
});

const app = express();

app.use('/images', express.static('dist/images'));

app.use('/bundle.js', function (req, res) {
  return fs.createReadStream('./dist/bundle.js.gz').pipe(
    res.header('Content-Encoding', 'gzip')
  );
});

const renderHtml = (reduxState, renderProps) => (
 `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1.0" />
    <title>React Boilerplate</title>
    <link rel="preload" href="/bundle.js" as="script" />
    <link rel="prefetch" href="/bundle.js" />
    <style>${style}</style>
  </head>
  <body>
  <div id="app"> ${renderToString(
    <Provider store={reduxState}>
      <RouterContext {...renderProps} />
    </Provider>
  )}
  </div>
  <script>window.__INITIAL_STATE__=${JSON.stringify(reduxState.getState())}</script>
  <script src="/bundle.js"></script>
  </body>
  </html>`
);

app.use((req, res) => {
  const initialStore = createStore(store, undefined, extras);
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
    if (err) res.status(500).send(err.message);
    else if (renderProps) {
      res.send(renderHtml(initialStore, renderProps));
    }
  })
});

app.listen(3000);
console.log('Server is now listening at localhost://3000');
