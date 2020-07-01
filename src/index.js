import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import config from 'react-global-configuration';
import React from 'react';
import ReactDOM from 'react-dom';

// You should place a config.json file in the public/ (dev) or root (prod) directory
fetch('/config.json')
  .then(response => response.json())
  .then(async configData => {
    config.set(configData);

    const App = await (await import('./App')).default;

    ReactDOM.render(<App />, document.getElementById('root'));
  })
  // eslint-disable-next-line no-console
  .catch(console.error);
