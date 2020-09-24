import React from "react";
// import "./Showpost.css";

class Showpost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card my-2 p-2">
        <div className="card-title">
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-body">
          <p>{this.props.body}</p>
          <button className="btn btn-danger btn-sm ">Comments</button>
        </div>
      </div>
    );
  }
}

export default Showpost;
//  <h1></h1>
//
//        <div className="comment-box justify-content-center">
//
//        </div>
