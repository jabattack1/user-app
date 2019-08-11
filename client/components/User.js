import React from "react";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";

class User extends React.Component {
  render() {
    const { user, i} = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-figure-wrap">
          <Link to={"/view/" + user[i].id}>
            <img
              src={user[i].display_src}
              className="grid-User"
            />
          </Link>
          <div>
            <ul>
            <li>Name: {user[i].first_name} {user[i].last_name}</li>
            <li>Email: {user[i].email}</li>
            <li>Role: {user[i].role}</li>
            <li>Status: {user[i].status}</li>
            </ul>
          </div>
        </div>
      </figure>
    );
  }
}

export default User;
