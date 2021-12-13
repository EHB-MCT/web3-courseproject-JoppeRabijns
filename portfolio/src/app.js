import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import Hero from "./pages/hero";

const App = () => {
  return (
    <Router>
      <div>
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
    </Router>
  );
};

export default App;
