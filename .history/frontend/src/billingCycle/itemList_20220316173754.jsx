import React, {Component} from "react";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import Grid from "../common/layout/grid"
import Input from "../common/form/input";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ItemList extends Component{

    add(index, item = {}){
        if(!this.props.readOnly){
            this.props.arrayInsert("billingCycleForm", "credits", index, item)
        }
    }

    remove(index){
        if(!this.props.readOnly && this.props.list.length > 1){
            this.props.arrayRemove("billingCycleForm", "credits", index)
        }
    }

    renderRows(){
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} component={Input} placeholder="Informe o nome" readOnly={this.props.readOnly}/></td>
                <td><Field name={`credits[${index}].value`} component={Input} placeholder="Informe o valor" readOnly={this.props.readOnly}/></td>
                <td>
                    <button type="button" className="btn btn-success" onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className="table-actions">A????es</th>
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

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)

export default connect(null, mapDispatchToProps)(ItemList)