import React from "react";
import "./App.css";
import { Route, Router, Switch, Link, NavLink } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Users from "./Containers/Users";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">

        <div id="header" className="row m-auto">

          <div className="col-sm-12 p-0">

            <div id="menue" className="row">

              <div className="col-sm-12 p-0">

                <nav class="navbar navbar-expand-sm bg-dark navbar-black  ">
                  <div class="navbar-brand justify-content-end bg-info ml-sm-5 ">
                    sasas
                  </div>
                  <ul class="navbar-nav ml-sm-5">
                    <li className="nav-item">
                      <NavLink
                        to="/about"
                        className="nav-link "
                        activeStyle={{ color: "#fff" }}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/users"
                        className="nav-link"
                        activeStyle={{ color: "#fff" }}
                      >
                        Users
                      </NavLink>
                    </li>{" "}
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className="nav-link "
                        exact
                        activeClassName="active"
                        activeStyle={{ color: "#fff" }}
                      >
                        Home
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
      
            <div id="box-pages" className="row px-sm-5">
              <div className="col-sm-12 px-sm-5 py-3">
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </div>
          
          </div>
        </div>

        <div id="footer" className="row">
          <div className="col-sm-12"></div>
        </div>
      </div>
    );
  }
}

export default App;
