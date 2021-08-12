import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import SingleMovie from '../pages/SingleMovie';
import Movies from '../pages/Movies';

export default function App(){
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/movie/:movieId">
            <SingleMovie />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
