import React from "react";
import { Link } from "react-router-dom";

import PhotoGrid from "./PhotoGrid";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxtagram</Link>
        </h1>
        <PhotoGrid {...this.props} />
      </div>
    );
  }
}

export default Main;
