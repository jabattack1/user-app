import React from "react";
import { Link } from "react-router-dom";
import User from "./User.js";
import NewUser from "./NewUser.js";

class UserGrid extends React.Component {
  render() {
  	console.log(this);
    return (
      <div>
        <Link to={"/create/"}>
          <p>CREATE NEW ACCOUNT</p>
        </Link>
        <div className="user-grid">
          {this.props.user.map((user, i) => (
            <User {...this.props} key={i} i={i} post={user} {...this.props} />
          ))}
        </div>
      </div>
    );
  }
}

export default UserGrid;
