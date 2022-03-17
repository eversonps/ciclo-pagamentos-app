import React, {Component} from "react";
import {reduxForm, Field, formValueSelector } from "redux-form"
import LabelAndInput from "../common/form/LabelAndInput";
import ItemList from "./itemList";
import IF from "../common/operator/IF";

import {init} from "./billingCycleActions";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";

class BillingCycleForm extends Component {
    render(){
        const {handleSubmit, readOnly, credits, debts} = this.props

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} label="Nome" cols="12 4" placeholder="Informe o nome" readOnly={readOnly}></Field>
                    <Field name="month" component={LabelAndInput} label="Mês" cols="12 4" placeholder="Informe o mês" readOnly={readOnly}></Field>
                    <Field name="year" component={LabelAndInput} label="Ano" cols="12 4" placeholder="Informe o ano" readOnly={readOnly}></Field>
                    <ItemList cols="12 6" list={credits} readOnly={readOnly} field="credits" legend="Créditos"></ItemList>
                    <ItemList cols="12 6" list={debts} readOnly={readOnly} field="debts" legend="Débitos"></ItemList>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const billingCycleForm = reduxForm({form: "billingCycleForm", destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector("billingCycleForm")

const mapStateToProps = state => ({
    credits: selector(state, "credits"),
    debts: selector(state, "debts")
})

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(billingCycleForm)