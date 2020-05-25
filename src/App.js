import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import history from "./utils/history";

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/shards-dashboards.1.1.0.min.css";
import "./assets/styles/other.css";

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""} >
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            history={history}
            component={(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
