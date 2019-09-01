import React from "react";
import { Link } from "react-router-dom";
import User from "./User.js";
import NewUser from "./NewUser.js";

class UserGrid extends React.Component {
  render() {

    return (
      <div>
        <div className='createLinkBox'>
          <Link to={"/create/"} className='createLink'>
            <p className='createLinkContent'>CREATE NEW ACCOUNT</p>
          </Link>
        </div>
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
