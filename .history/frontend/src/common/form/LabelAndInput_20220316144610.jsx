import React from "react";
import grid from "../layout/grid"

export default props => (
    <Grid cols={props.cols}>
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} /> 
        </div>
    </Grid>
)