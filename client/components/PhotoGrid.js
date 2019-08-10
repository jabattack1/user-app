import React from "react";
import { Link } from "react-router-dom";
import Photo from "./Photo.js";

class PhotoGrid extends React.Component {
  render() {
  	console.log(this);
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} {...this.props} />
        ))}
      </div>
    );
  }
}

export default PhotoGrid;
