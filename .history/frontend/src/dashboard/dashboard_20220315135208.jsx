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
                    <ValueBox cols="12 4" color="green" icon="bank" value="R$ 10" text="Total de Créditos"></ValueBox>
                    <ValueBox cols="12 4" color="red" icon="credit-card" value="R$ 10" text="Total de Debitos"></ValueBox>
                    <ValueBox cols="12 4" color="blue" icon="bank" value="R$ 10" text="Valor Consolidado"></ValueBox>
                </Content>
            </div> 
        )
    }
}

export default Dashboard