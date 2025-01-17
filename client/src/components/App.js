import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const findUser = (email) => {
    fetch('/api/user/find', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' }
    })
        .then((res) => {
          if (res.status === 404) {
            setUserNotFound(true);
            throw new Error();
          } else {
            return res.json();
          }
        })
        .then((json) => {
          // the variable json contains the user's profile information
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
  }

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
        {loggedIn ? <Redirect to="/register" /> : <Home userNotFound={userNotFound} findUser={findUser} />}
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </HelmetProvider>
  );
}

export default App;
