import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./pages/App";
import List from "./pages/List";
import Project from "./pages/Project";
import About from "./pages/About";

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ List } />
    <Route path="list" component={ List } />
    <Route path="about" component={ About } />
    <Route path=":projectName" component={ Project } />
  </Route>
);

export default routes;
