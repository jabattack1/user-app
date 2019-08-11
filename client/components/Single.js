import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/actionCreators.js";

import User from "./User.js";

class Single extends React.Component {
  render() {
    //index of the user
    const i = this.props.match.params.userId;
    //get us the user
    const user = this.props.user[i];

    return (
      <div>
        <div className="single-user">
          <User i={i} user={user} {...this.props} />
        </div>
        <div className='edit'>
        <label>
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
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select><br/>
        </label>
        <input type="submit" value="UPDATE" onClick={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    );
  }

  handleSubmit(event){
    event.preventDefault();

    const i = this.props.match.params.userId;
    const user = this.props.user[i];

    const first_name = this.refs.first_name.value;
    const last_name = this.refs.last_name.value;
    const email = this.refs.email.value;
    const role = this.refs.role.value;
    const status = this.refs.status.value;
    this.props.update(i, first_name, last_name, email, role, status);
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
)(Single);
