
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import multi from "redux-multi"
import thunk from "redux-thunk"

import { createStore, applyMiddleware} from "redux"
import promise from "redux-promise"

import { Provider } from "react-redux"
import reducers from "./main/reducers"

import Routes from "./main/routes";
import authOrApp from './main/authOrApp';
import AuthOrApp from './main/authOrApp';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>,
     document.getElementById("app")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
