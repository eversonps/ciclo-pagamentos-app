import React, {Component} from "react";
import {reduxForm, Field } from "redux-form"
import LabelAndInput from "../common/form/LabelAndInput";

class BillingCycleForm extends Component {
    render(){
        const {handleSubmit} = this.props

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} label="Nome"></Field>
                    <Field name="month" component={LabelAndInput} label="Mês"></Field>
                    <Field name="year" component={LabelAndInput} label="Ano"></Field>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: "billingCycleForm"})(BillingCycleForm)