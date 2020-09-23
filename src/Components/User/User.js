import React from "react";
import "./User.css";
import Axios from "axios";
import Showpost from "./Showpost/Showpost";
// import Loading from "../../Loading/Loading";

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }
  showPostHndler = (id) => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => {
        console.log("POST OMAD...!");
        this.setState({ posts: response.data });
        console.log("SET SHOD...!", "studentId:", id);
      })
      .catch((Error) => {
        console.log("ERROR DARIM...!");
        console.log(Error);
      });
  };

  render() {
    return (
      <div className="user-box">
        <div>
          <h2 className="user-name">
             {this.props.name}: {this.props.id}
          </h2>
          <p className="user-email">email : {this.props.email}</p>
          <p className="user-phone">Phone : {this.props.phone}</p>
        </div>
        <div>
          <button onClick={() => this.showPostHndler(this.props.id)}
          className="btn btn-success">
            Show post
          </button>
          {this.state.posts !== null
            ? this.state.posts.map((posts) => {
                return (
                  <Showpost
                    key={posts.id}
                    title={posts.title}
                    body={posts.body}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
