import React, {Component} from "react";
import { Field } from "redux-form";
import Grid from "../common/layout/grid"
import Input from "../common/form/input";

class CreditList extends Component{
    renderRows(){
        const list = this.props.list || []
        return (
            <tr>
                <td><Field name="credits[0].name" component={Input} placeholder="Informe o nome" readOnly={this.props.readOnly}/></td>
                <td><Field name="credits[0].value" component={Input} placeholder="Informe o valor" readOnly={this.props.readOnly}/></td>
                <td></td>
            </tr>
        )
    }

    render(){
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Credits</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>        
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList