import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/actionCreators.js";

class NewUser extends React.Component {
  render() {

    return (
      <div>
		<div className='create'>
			<h3>CREATE NEW USER ACCOUNT</h3>
          <label>
            First name: <input type="text" ref='first_name'/><br/>
          </label>
          <label>
            Last name: <input type="text" ref='last_name' /><br/>
          </label>
          <label>
            Email: <input type="text" ref='email'/><br/>
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
          <button onClick={this.handleCreate.bind(this)}>CREATE NEW USER ACCOUNT</button>
        </div>
      </div>
    );
  }

    handleCreate(event){
    event.preventDefault();

    //check if user object is empty
    console.log(this.props.user.length);
    if(this.props.user.length===0){
    	var i = 1;
    }
    else{
    	var i = parseInt(this.props.user[this.props.user.length-1].id) + 1;
	}

    //check if first name is valid name
    const first = this.refs.first_name.value;

    if(first.length > 1){
      var first_name = first;
    }

    //check if last name is valid name
    const last = this.refs.last_name.value;
    if(last.length > 1){
      var last_name = last;
    }

    //find email address that matches this.refs.email.value
    const mail = this.refs.email.value;
    var emailMatch = this.props.user.filter(function(user) {
      return user.email === mail;
    })[0];
    //check if email address is a valid email address
    if(validateEmail(mail) &&  emailMatch === undefined){
      var email = mail;
    }

    //get role
    const role = this.refs.role.value;

    //get status
    const status = this.refs.status.value;

    if (first_name == null || first_name == "", last_name == null || last_name == "", email == null || email == "") {
      alert("Please Fill All Fields");
      return false;
    }
    else{
    	this.props.create(i, first_name, last_name, email, role, status);
	}
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
)(NewUser);
