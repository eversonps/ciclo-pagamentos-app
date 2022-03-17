import React from "react";

import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";

import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router"
import App from "./app"

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/" component={Dashboard}></Route>
        <Route path="/billingCycles" component={BillingCycle}></Route>
        <Redirect from="*" to="/"></Redirect>
    </Router>
)
