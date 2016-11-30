import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Home from './Home';
import About from './About';
import AboutType from './AboutType';
import Contact from './Contact';

import './index.css';

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
        <Route path="/about" component={About} >
            <Route path="/about/:type" component={AboutType}/>
        </Route>
      <Route path="/contact" component={Contact} />
    </Router>,
  document.getElementById('root')
);
