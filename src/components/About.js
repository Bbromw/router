import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Extra } from "./Extra";

export const About = () => {
  return (
    <Router>
      <h3>Other</h3>
      {/* {links.map((link, index) => {
        return (
          <div key={index}>
            <Link to={`/${index}`}>{link.name}</Link>
          </div>
        );
      })} */}
      <nav>
        <Link to="/age">age</Link>
        <br />
        <Link to="/name">name</Link>
      </nav>
      <Switch>
        <Route path="/age" component={Extra}></Route>
      </Switch>
    </Router>
  );
};
