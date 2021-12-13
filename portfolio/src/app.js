import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Hero from "./hero";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </nav>
        <Hero />
      </div>
    </Router>
  );
};

export default App;
