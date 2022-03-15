import React from "react";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

import { Router, Route, Redirect, hashHistory } from "react-router"

export default props => (
    <Router history={hashHistory}></Router>
)
