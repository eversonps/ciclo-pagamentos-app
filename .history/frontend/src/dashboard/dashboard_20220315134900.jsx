import React, {Component} from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";

class Dashboard extends Component{
    render(){
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"></ContentHeader>
                <Content>
                    <ValueBox cols="12 4" color="green"></ValueBox>
                </Content>
            </div> 
        )
    }
}

export default Dashboard