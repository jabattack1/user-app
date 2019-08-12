import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/actionCreators.js";

class NewUser extends React.Component {
  render() {
    console.log(this);

    return (
      <div>
		<div className='create'>
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
          <input type="submit" value="CREATE USER" onClick={this.handleCreate.bind(this)}/>
        </div>
      </div>
    );
  }

    handleCreate(event){
    event.preventDefault();

    const i = parseInt(this.props.user[this.props.user.length-1].id) + 1;
    const first = this.refs.first_name.value;
    const last = this.refs.last_name.value;
    console.log('retard',this);
    //check is first name is valid name
    if(first.length < 2){
      var first_name = this.props.user[i].first_name;
    }

    //check is last name is valid name
    if(last.length < 2){
      var last_name = this.props.user[i].last_name;
    }

    const mail = this.refs.email.value;

    //find email address that matches this.refs.email.value
    var emailMatch = this.props.user.filter(function(user) {
      return user.email === mail;
    })[0];

    if(validateEmail(mail) &&  emailMatch === undefined){
      var email = this.refs.email.value;
    }

    const role = this.refs.role.value;
    const status = this.refs.status.value;

    this.props.create(i, first_name, last_name, email, role, status);
  }
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
