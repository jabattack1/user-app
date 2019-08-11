import React from "react";
import { Link } from "react-router-dom";

import UserGrid from "./UserGrid";

class Main extends React.Component {
  render() {
    return (
      <div>
        <UserGrid {...this.props} />
      </div>
    );
  }
}

export default Main;
