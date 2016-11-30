import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Mongo } from 'meteor/mongo';


export default class SignUp extends Component {

  handleSubmit(event) {
     event.preventDefault();
     const mobile_number = ReactDOM.findDOMNode(this.refs.mobile).value.trim();
     const pwd = ReactDOM.findDOMNode(this.refs.pwd).value.trim();
     Accounts.createUser({
           username : mobile_number,
           password: pwd
       });
       let aboo =Meteor.users.find({}).fetch();
       console.log(aboo);
      // console.log( Meteor.user().username || Meteor.user().profile.name);
      // console.log( Meteor.user().username);
       ReactDOM.findDOMNode(this.refs.mobile).value = '';
       ReactDOM.findDOMNode(this.refs.pwd).value = '';
   }
   facebook_button_click(event){
     event.preventDefault();

     Meteor.loginWithFacebook({}, function(err){
           if (err) {
               throw new Meteor.Error("Facebook login failed");
           }
       });
   }

  render() {
    return (
        <div className="container">
        <h1>sign up</h1>
        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >

          <label>Mobile Number</label>
          <input type="number" ref="mobile" placeholder="mobile number"  />
          <label>Password</label>
          <input type="Password" ref="pwd"/>
          <label>Login Type</label>
          <select>
  <option value="user">User</option>
  <option value="servicer">Service Provider</option>

</select>
          <button >Sign Up</button>
        </form>
        <button onClick={this.facebook_button_click.bind(this)}>Facebook login</button>
      </div>
    )
  }
}
