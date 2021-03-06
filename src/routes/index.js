import React from 'react';
import { Switch } from 'react-router-dom';

// CUSTOM IMPORTS
import Route from './Route';

// PUBLIC URLS
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// PRIVATE URLS
import Home from '../pages/Home';
import MyProfile from '../pages/MyProfile';

export default function Routes() {
  return (
    <Switch>
      {/* PUBLIC ROUTES */}
      <Route path="/" exact component={SignIn} />
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/signUp" exact component={SignUp} />

      {/* PRIVATE ROUTES */}
      <Route path="/home" exact isPrivate component={Home} />
      <Route path="/profile/me" exact isPrivate component={MyProfile} />

      <Route path="/" component={() => <h1>404! PAGE NOT FOUND</h1>} />
    </Switch>
  );
}
