import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Hero from "./pages/hero";

const App = () => {
  return (
    <HashRouter>
      <div>
        {/*  <img
          className="overlay"
          src="https://blog.spoongraphics.co.uk/wp-content/uploads/2012/05/22.jpg"
          alt=""
        /> */}
        <nav className="navigation">
          <NavLink exact activeClassName="active" className="link" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" className="link" to="/contact">
            Contact
          </NavLink>
        </nav>
        <Hero />
      </div>
    </HashRouter>
  );
};

export default App;
