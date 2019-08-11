import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/actionCreators.js";

import User from "./User.js";
import Comments from "./Comments.js";

class Single extends React.Component {
  render() {
    //index of the user
    const { userId } = this.props.match.params;
    const i = this.props.user.findIndex((user) => user.code === userId);
    //get us the user
    const user = this.props.user[i];
    const userComments = this.props.comments[userId] || [];
    return (
      <div className="single-User">
        <User i={i} user={user} {...this.props} />
        <Comments userComments={userComments} {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);
