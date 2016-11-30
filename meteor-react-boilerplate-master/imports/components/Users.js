import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

import {createContainer} from 'meteor/react-meteor-data';

import React, {Component} from 'react';

import Header from './layout/Header.js';
import Footer from './layout/Footer.js';

import UserC from './User/User.js';
import {UserData} from '../api/Users.js';

export default class Users extends Component {

    renderTasks() {
        return this.props.users.map((user) => (<UserC key={user._id} user={user}/>));
    }
    render() {
        return (
            <div>
                <Header/>
                <ul></ul>
                <div className="detail">
                    <ul>
                      {this.renderTasks()}
                    </ul>
                </div>
                    <div>{this.props.children}</div>
                <Footer/>
            </div>
        );
    }
}

export default createContainer(() => {
    return {users: UserData.find({}).fetch()};
}, Users);
