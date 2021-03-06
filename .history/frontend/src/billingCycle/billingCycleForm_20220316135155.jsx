import React, {Component} from "react";
import {reduxForm, Field } from "redux-form"

class BillingCycleForm extends Component {
    render(){
        return (
            <form role="form">
                <div className="box-body">
                    <Field name="name" component="input"></Field>
                    <Field name="name" component="input"></Field>
                    <Field name="name" component="input"></Field>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: "billingCycleForm"})(BillingCycleForm)