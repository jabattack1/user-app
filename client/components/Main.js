import React from "react";
import { Link } from "react-router-dom";

import UserGrid from "./UserGrid";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">User App</Link>
        </h1>
        <UserGrid {...this.props} />
      </div>
    );
  }
}

export default Main;
