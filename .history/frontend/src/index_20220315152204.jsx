import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";

import { createStore, applyMiddleware} from "redux"
import promise from "redux-promise"

import { Provider } from "react-redux"
import reducers from "./main/reducers"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById("app")
)