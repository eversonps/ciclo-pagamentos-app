import React, {Component} from "react";
import {reduxForm, Field } from "redux-form"
import LabelAndInput from "../common/form/LabelAndInput";

import {init} from "./billingCycleActions";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";

class BillingCycleForm extends Component {
    render(){
        const {handleSubmit, readOnly} = this.props

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} label="Nome" cols="12 4" placeholder="Informe o nome" readOnly={readOnly}></Field>
                    <Field name="month" component={LabelAndInput} label="Mês" cols="12 4" placeholder="Informe o mês" readOnly={readOnly}></Field>
                    <Field name="year" component={LabelAndInput} label="Ano" cols="12 4" placeholder="Informe o ano" readOnly={readOnly}></Field>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.label}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const billingCycleForm = reduxForm({form: "billingCycleForm", destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(billingCycleForm)