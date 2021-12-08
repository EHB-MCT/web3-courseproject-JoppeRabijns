import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Hero from "./hero";

const App = () => {
  return (
    <Router>
      <div>
        {/*  <nav>
          <Link to="/">Home</Link>
          <Link to="/">Other</Link>
        </nav> */}
        <Hero />
      </div>
    </Router>
  );
};

export default App;
