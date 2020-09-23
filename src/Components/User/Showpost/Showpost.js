import React from "react";
import "./Showpost.css";
// import Students from "./Components/Students/Students";
// import Wellcom from "./Components/Wellcom/Wellcom";
// // import Logo from "../public/Logo.png"

class Showpost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="post-box">
       <h1>{this.props.title}</h1>
       <p>{this.props.body}</p>
       <div className="comment-box">
         <button className="btn btn-danger btn-sm">Comments</button>
       </div>
    </div>;
  }
}

export default Showpost;
