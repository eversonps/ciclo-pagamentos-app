import React, {Component} from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox"

export default ({credits, debt}) => (
    <Grid cols="12">
        <fieldset>
            <legend> Resumo </legend>
            <Row>
                <ValueBox cols="12 4" color="green" icon="bank">

                </ValueBox>
            </Row>
        </fieldset>
    </Grid> 
)
class Summary extends Component{
    render(){

    }
}