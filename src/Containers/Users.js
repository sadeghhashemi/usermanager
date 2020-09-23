import React from "react";
import "./Users.css";
import User from "../Components/User/User";
import axios from "axios";
import Loading from "../Components/Loading/Loading";


export default class Students extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: null,
    };
    this.currentPage = 1;
    this.pageItem = 2;
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => {
        
        this.setState({
         userList : users.data,
        });
        console.log("rizesh anjam shod...!");
        // this.setState({userList.users.})
        console.log(this.state);
      })
      .catch((error) => {
        console.log("error Kiriii...!");
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {
          this.state.userList !== null
          ?this.state.userList.map((userList)=>{
           return( <User 
              key={userList.id}
              name={userList.name}
              id={userList.id}
              email={userList.email}
              phone={userList.phone}
            />)
          }):<Loading /> 
        }
      </div>
    );
  }
}
     
