import React from "react";
import "./App.css";
import { Route, Router, Switch, Link, NavLink } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Users from "./Containers/Users";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div class="navbar navbar-expand-sm bg-dark navbar-black justify-content-end">
            {/* <div class="navbar-brand justify-content-end bg-info ">sasas</div> */}
            <ul class="navbar-nav">
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
          </div>

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
    );
  }
}

export default App;
