import "../common/template/dependencies"
import React from "react";
import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Routes from "./routes";
import Messages from "../common/msg/messages";

export default props => {
    return (
        <div className="wrapper">
            <Header></Header>
            <SideBar></SideBar>
            <div className="content-wrapper">
                <Routes></Routes>
            </div>
            <Footer></Footer>
        </div>
    )
}