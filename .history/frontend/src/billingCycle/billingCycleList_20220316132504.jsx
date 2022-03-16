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

export default BillingCycleList