import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Core } from '@cdiscount/backoffice-app-components';
import { Header, Layout, ThemeProvider } from '@cdiscount/backoffice-ui';
import React from 'react';

import headerProps from './headerProps';
import rootReducer from './reducer';
import rootSaga from './saga';
import routes from './routes';

function App() {
  return (
    <Core reducer={rootReducer} saga={rootSaga}>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Header {...headerProps} />
            <Switch>
              {routes.map(({ component, exact, path }) => (
                <Route key={path} component={component} exact={exact} path={path} />
              ))}
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Core>
  );
}

export default App;
