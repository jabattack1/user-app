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
          <input type="submit" value="CREATE USER" />
        </div>
      </div>
    );
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
