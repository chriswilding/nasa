import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Asset from "./asset/Page";
import Search from "./search/Page";

const App = () => (
  <Router>
    <div>
      <Route path="/search" component={Search} />
      <Route path="/asset/:id" component={Asset} />
    </div>
  </Router>
);

export default App;
