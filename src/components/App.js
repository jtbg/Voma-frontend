import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import NoOnboarding from '../pages/NoOnboarding';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/slack/authenticate">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/no-onboarding">
          <NoOnboarding />
        </Route>
      </Switch>
    </HelmetProvider>
  );
}

export default App;
