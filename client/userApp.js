// let's go!
import React from "react";
import ReactDOM from "react-dom";

//import css
import css from "./styles/style.css";

//import components
import App from "./components/App.js";
import Single from "./components/Single.js";
import NewUser from "./components/NewUser.js";

//import react router dps
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Raven from "raven-js";
import { sentry_url } from "./data/config";

Raven.config(sentry_url).install();

// Raven.captureMessage('something bad happend!');
// Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/view/:userId" component={Single} />
      <Route exact path="/create" component={NewUser} />
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
