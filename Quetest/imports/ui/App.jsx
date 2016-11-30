import React, { Component, PropTypes } from 'react';
import { Mongo } from 'meteor/mongo';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Tasks } from '../api/users.js';
import SignUp from './signup.jsx';
import Task from './User.jsx';

// App component - represents the whole app
class App extends Component {



  handleSubmit(event) {
     event.preventDefault();
//console.log( Meteor.user().username);
   // Find the text field via the React ref
    //  const mobile_number = Number(ReactDOM.findDOMNode(this.refs.mobile).value.trim());
    //  const pwd = Number(ReactDOM.findDOMNode(this.refs.pwd).value.trim());
      const mobile_number = ReactDOM.findDOMNode(this.refs.mobile).value.trim();
      const pwd = ReactDOM.findDOMNode(this.refs.pwd).value.trim();
     Meteor.loginWithPassword(mobile_number,pwd);
     let user_found = Tasks.findOne({mobile:mobile_number}) === undefined ? false : true;
//console.log( Meteor.user().username || Meteor.user().profile.name);
    if(user_found)
     {
             let user_data = Tasks.findOne({mobile:mobile_number});
                  //console.log(user_data);
                  if(user_data.mobile==mobile_number&&user_data.password==pwd)
                   {

                    console.log("User" +user_data.mobile + " Successfully login" );
                    }
                else{
                   console.log("User  " +user_data.mobile + " Found,!check password");
                    }
         }
  else {
           {
              console.log("not found user,please sign up");
           }
      }
  ReactDOM.findDOMNode(this.refs.mobile).value = '';
  ReactDOM.findDOMNode(this.refs.pwd).value = '';
}
  renderTasks() {

     return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));

  }


  render() {

    // let renderContent;
    // if(this.data.currentUser){
    //     renderContent = <span>Hello {this.data.currentUser.username}!</span>;
    // }else{
    //     //you can do a loading template here or just leave blank
    // }
    //
    // return renderContent;


    return (
      <div className="container">
        <header>
          <h1>Que Test App</h1>
        </header>

          <AccountsUIWrapper />

           <SignUp/>
 { this.props.currentUser ?<h1>Hello  {this.props.currentUser.username}</h1>:

        <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
          <h4>Login</h4>
          <label>Mobile Number</label>
          <input type="number" ref="mobile" placeholder="mobile number"  />
          <label>Password</label>
          <input type="Password" ref="pwd"/>
          <button >Login</button>
        </form>

}

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
     currentUser: Meteor.user(),
  };
}, App);
