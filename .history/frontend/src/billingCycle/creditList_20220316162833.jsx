import React, {Component} from "react";
import { Field } from "redux-form";
import Grid from "../common/layout/grid"

class CreditList extends Component{
    renderRows(){
        return (
            <tr>
                <td><Field name="???" component="input"/></td>
                <td><Field name="???" component="input"/></td>
                <td><Field name="???" component="input"/></td>
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