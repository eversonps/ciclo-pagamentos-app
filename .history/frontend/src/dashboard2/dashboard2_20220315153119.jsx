import React, {Component} from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

import axios from "axios"

const BASE_URL = "http://localhost:3002/api"

export default class Dashboard2 extends Component{
    constructor(props){
        super(props)
    }
    
    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
    }

    render(){
        const {credit, debt} = this.props.summary

        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos"></ValueBox>
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Debitos"></ValueBox>
                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`} text="Valor Consolidado"></ValueBox>
                    </Row>
                </Content>
            </div> 
        )
    }
}