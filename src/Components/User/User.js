import React from "react";
// import "./User.css";
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
      <div className="card my-2 p-3 ">

        <div className="card-title text-center ">
           <h3>{this.props.id}: {this.props.name}</h3>
        </div>

        <div className="card-body">
          <div>
            <p className="user-email">email : {this.props.email}</p>
            <p className="user-phone">Phone : {this.props.phone}</p>
            <button
              onClick={() => this.showPostHndler(this.props.id)}
              className="btn btn-success"
            >
              Show post
            </button>
          </div>

          <div>
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
      </div>
    );
  }
}

