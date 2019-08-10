import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/actionCreators.js";

import Photo from "./Photo.js";
import Comments from "./Comments.js";

class Single extends React.Component {
  render() {
    //index of the post
    const { postId } = this.props.match.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    //get us the post
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
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
