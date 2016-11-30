import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {UserData} from '../api/Users.js';

export default class User extends Component {
    renderUser() {

        let data = UserData.findOne({_id:new Mongo.ObjectID(this.props.params.userId)})
        if(data){
            return data.name + '---' + data.desig + '---' + this.props.params.userId;
        }

    }

    render() {

        return (
            <div>
                <h2>{this.renderUser()}</h2>
            </div>
        );
    }
}


// export default createContainer(() => {
//     //console.log(this.props.params.userId);
//     return {users: UserData.find({}).fetch()};
// }, User);
