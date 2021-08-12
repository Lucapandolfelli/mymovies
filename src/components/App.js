import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import SingleMovie from './SingleMovie';
import Movies from './Movies';

export default function App(){
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/movie/:movieId">
          <SingleMovie />
        </Route>
        <Route path="/">
          <Movies />
        </Route>
      </Switch>
    </Router>
  );
};
