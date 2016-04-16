import React from "react";
import ReactDOM from "react-dom";
import { Router, useRouterHistory } from "react-router";
import { createHashHistory } from "history";

import routes from "./routes";

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <Router history={appHistory} onUpdate={() => window.setTimeout(() => window.scrollTo(0, 0), 200)}>
    {routes}
  </Router>,
  document.getElementById("app")
);
