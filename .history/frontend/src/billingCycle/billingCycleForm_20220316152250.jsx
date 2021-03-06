import React, {Component} from "react";
import {reduxForm, Field } from "redux-form"
import LabelAndInput from "../common/form/LabelAndInput";

class BillingCycleForm extends Component {
    render(){
        const {handleSubmit} = this.props

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} label="Nome" cols="12 4" placeholder="Informe o nome"></Field>
                    <Field name="month" component={LabelAndInput} label="Mês" cols="12 4" placeholder="Informe o mês"></Field>
                    <Field name="year" component={LabelAndInput} label="Ano" cols="12 4" placeholder="Informe o ano"></Field>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-default">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: "billingCycleForm", destroyOnUnmount: false})(BillingCycleForm)