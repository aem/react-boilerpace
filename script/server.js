import compression from 'compression';
import { createStore } from 'redux';
import cxs from 'cxs';
import express from 'express';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackDevConfig from '../webpack/webpack.config.dev.server.babel';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackProdConfig from '../webpack/webpack.config.prod.server.babel';

import routes from '../src/Routes';
import { store, extras } from '../src/lib/store';

const config = (process.env === 'production') ? webpackProdConfig : webpackDevConfig;
const compiler = webpack(config);

export default ({ chunks }) => {
  const main = chunks().javascript.main;
  const app = express();

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));

  app.use(compression());
  app.use('/assets/', express.static('build/assets'));

  const renderHtml = (reduxState, renderProps) => {
    const content = renderToString(
      <Provider store={reduxState}>
        <RouterContext {...renderProps} />
      </Provider>
    );
    const style = cxs.getCss();
    return (`
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1.0" />
        <title>React Boilerplate</title>
        <style>${style}</style>
        <link rel="preload" href="${main}" as="script" />
        <link rel="prefetch" href="${main}" />
      </head>
      <body>
        <div id="app">${content}</div>
        <script>window.__INITIAL_STATE__=${JSON.stringify(reduxState.getState())}</script>
        <script src="${main}"></script>
      </body>
      </html>
    `);
  };

  app.use((req, res) => {
    const initialStore = createStore(store, undefined, extras);
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) res.status(500).send(err.message);
      else if (renderProps) {
        res.send(renderHtml(initialStore, renderProps));
      }
    });
  });

  app.listen(3000);
  console.log('Server is now listening at localhost://3000');
};
