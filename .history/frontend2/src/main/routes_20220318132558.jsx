import React from "react";
import {Router, Route, IndexRoute, Redirect, hashHistory, Switch} from "react-router"

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router"
import authOrApp from "./authOrApp";
import billingCycleList from "../billingCycle/billingCycleList";

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/billingCycles" component={billingCycleList}></Route>
        </Switch>
    </div>
)
