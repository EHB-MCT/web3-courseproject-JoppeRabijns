import React, { Suspense } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const Hero = React.lazy(() => import("./pages/hero"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <h1>LOADING...</h1>
        </div>
      }
    >
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
    </Suspense>
  );
};

export default App;
