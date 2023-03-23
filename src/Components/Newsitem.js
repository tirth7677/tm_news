import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, desc, imageurl, newsurl, date } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            <p className="card-text"><small className="text-muted">Date: {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;