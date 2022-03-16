import React, {Component} from "react";
import Grid from "../common/layout/grid"

class CreditList extends Component{
    render(){
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Credits</legend>
                    <table className="table">
                        <thead>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </thead>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList