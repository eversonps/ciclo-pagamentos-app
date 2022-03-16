import React, {Component} from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getList } from "./billingCycleActions"

class BillingCycleList extends Component{
    render(){
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.BillingCycle.list
})

const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)

export default BillingCycleList