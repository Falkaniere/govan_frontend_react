import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../src/pages/Main/index.js';
import Match from '../src/pages/Match/index.js';
import notFindDriver from '../src/pages/NotFindDriver/index';
import Contact from '../src/pages/Contact/index';
import Login from '../src/pages/Register/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/match" component={Match} />
        <Route path="/notfinddriver" component={notFindDriver} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
