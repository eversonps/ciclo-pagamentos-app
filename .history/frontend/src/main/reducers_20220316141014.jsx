import {combineReducers} from "redux"
import {reducer as formReducer} from "redux-form"
import {reducer as toastrReducer} from "redux-form"

import DashboardReducer from "../dashboard/dashboardReducer"
import TabReducer from "../common/tab/tabReducer"
import BillingCycleReducer from "../billingCycle/billingCycleReducer"

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    BillingCycle: BillingCycleReducer,
    form: formReducer
})

export default rootReducer