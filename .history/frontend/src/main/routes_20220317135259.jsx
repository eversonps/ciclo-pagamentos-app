import React from "react";

import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";

import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router"
import App from "./app"

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path="/billingCycles" component={BillingCycle}></Route>
        </Route>
        <Route path="/" component={Dashboard}></Route>
        
        <Redirect from="*" to="/"></Redirect>
    </Router>
)
