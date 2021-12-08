import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Project from "./pages/project";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project/:id" component={Project} />
      </Switch>
    </Router>
  );
};

export default App;
