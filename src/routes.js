import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./pages/App";
import List from "./pages/List";
import Project from "./pages/Project";
import About from "./pages/About";

const routes = (
  <Route path="/" component={ App }>
    {/*Route to index*/}
    <IndexRoute component={ List } />
    {/*List of projects*/}
    <Route path="list" component={ List } />
    {/*About page*/}
    <Route path="about" component={ About } />
    {/*Route for each project*/}
    <Route path=":projectName" component={ Project } />
  </Route>
);

export default routes;
