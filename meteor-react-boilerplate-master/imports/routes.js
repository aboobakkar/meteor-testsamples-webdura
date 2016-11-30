import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import i18n from 'meteor/universe:i18n';

// route components
import HomePage from './components/Home.js';
import AboutPage from './components/About.js';
import ContactPage from './components/Contact.js';
import Users from './components/Users.js';
import User from './components/User.js';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/users" component={Users}>
            <Route path="/user/:userId" component={User}/>
        </Route>
    </Router>
);
