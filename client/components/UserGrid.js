import React from "react";
import { Link } from "react-router-dom";
import User from "./User.js";

class UserGrid extends React.Component {
  render() {
  	console.log(this);
    return (
      <div className="user-grid">
        {this.props.user.map((user, i) => (
          <User {...this.props} key={i} i={i} post={user} {...this.props} />
        ))}
      </div>
    );
  }
}

export default UserGrid;
