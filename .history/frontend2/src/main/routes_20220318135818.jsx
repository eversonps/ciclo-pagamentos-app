import React from "react";
import {Router, Route, IndexRoute, Redirect, hashHistory, Switch} from "react-router"

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";


import authOrApp from "./authOrApp";
import billingCycleList from "../billingCycle/billingCycleList";

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/billingCycles" component={BillingCycle}></Route>
        </Switch>
    </div>
)
