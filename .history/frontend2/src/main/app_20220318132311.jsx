import React from "react";
import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Messages from "../common/msg/messages";

import {HashRouter} from "react-router-dom"
import Routes from "./routes"

export default props => {
    return (
        <HashRouter>
            <div className="wrapper">
                <Header></Header>
                <SideBar></SideBar>
                <Routes></Routes>
                <Footer></Footer>
                <Messages></Messages>
            </div>
        </HashRouter>
    )
}