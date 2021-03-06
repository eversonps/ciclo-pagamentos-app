import React, {Component} from "react";
import { bindActionCreators } from "redux"

class TabHeader extends Component{
    render(){
        return (
            <li>
                <a href="javascript:;" data-toogle="tab" data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}

export default TabHeader