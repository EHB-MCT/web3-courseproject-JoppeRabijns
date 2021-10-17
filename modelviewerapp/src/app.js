import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Model from "./pages/Model";
import Upload from "./pages/Upload"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={Upload} />
        <Route path="/model/:id" component={Model} />
      </Switch>
    </Router>
  );
};

export default App;