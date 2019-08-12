import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/actionCreators.js";

import User from "./User.js";

class Single extends React.Component {
  render() {
    //index of the user
    const id = this.props.match.params.userId;
    //get index of user
    const i = this.props.user.map(function(e) { return e.id; }).indexOf(id);
    //get the user
    const user = this.props.user[i];

    return (
      <div>
        <div className="single-user">
          <User i={i} user={user} {...this.props} />
        </div>
        <div className='edit'>
          <h3>EDIT USER ACCOUNT</h3>
          <label className='label'>
            First name: <input type="text" placeholder={user.first_name} ref='first_name'/><br/>
          </label>
          <label>
            Last name: <input type="text" placeholder={user.last_name} ref='last_name' /><br/>
          </label>
          <label>
            Email: <input type="text" placeholder={user.email} ref='email'/><br/>
          </label>
          <label>
            Role:
            <select ref='role'>
              <option value="Doctor">Doctor</option>
              <option value="Admin">Admin</option>
              <option value="Accountant">Accountant</option>
            </select><br/>
          </label>        
          <label>
            Status:
            <select ref='status'>
              <option value="Active" >Active</option>
              <option value="Inactive" >Inactive</option>
            </select><br/>
          </label>
          <button onClick={this.handleSubmit.bind(this)}>UPDATE ACCOUNT</button>
        <button id='deleteButton'onClick={this.deleteAccount.bind(this)}>DELETE ACCOUNT</button>
        </div>
      </div>
    );
  }

  handleSubmit(event){
    event.preventDefault();

    const i = this.props.match.params.userId;
    const user = this.props.user[i];

    const first = this.refs.first_name.value;
    const last = this.refs.last_name.value;

    //check is first name is valid name
    if(first.length < 2){
      var first_name = this.props.user[i].first_name;
    }
    else{
      var first_name = first;
    }

    //check is last name is valid name
    if(last.length < 2){
      var last_name = this.props.user[i].last_name;
    }
    else{
      var last_name = last;
    }

    const mail = this.refs.email.value;

    //find email address that matches this.refs.email.value
    var emailMatch = this.props.user.filter(function(user) {
      return user.email === mail;
    })[0];

    //check if email address is a valid email address
    if(validateEmail(mail) &&  emailMatch === undefined){
      var email = this.refs.email.value;
    }
    else{
      var email = this.props.user[i].email;
    }

    //get role
    const role = this.refs.role.value;

    //get status
    const status = this.refs.status.value;

    this.props.update(i, first_name, last_name, email, role, status);
  }

  //delete user account
  deleteAccount(){
    event.preventDefault();
    const i = this.props.match.params.userId;
    this.props.deleteUser(i);
  }

}

//validate email address
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);
