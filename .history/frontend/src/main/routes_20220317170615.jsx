import React from "react";

import Dashboard from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";

import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router"
import authOrApp from "./authOrApp";

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={authOrApp}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path="/billingCycles" component={BillingCycle}></Route>
        </Route>        
        <Redirect from="*" to="/"></Redirect>
    </Router>
)
