import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import multi from "redux-multi"
import thunk from "redux-thunk"

import { createStore, applyMiddleware} from "redux"
import promise from "redux-promise"

import { Provider } from "react-redux"
import reducers from "./main/reducers"

import Routes from "./main/routes";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
     document.getElementById("app")
)