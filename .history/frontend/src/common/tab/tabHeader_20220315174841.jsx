import React, {Component} from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import IF from "../operator/IF";

import {selectTab} from "./tabActions"

class TabHeader extends Component{
    render(){
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]

        return (
            <IF test={visible}>
                <li className={selected ? "active" : ""}>
                    <a href="javascript:;" data-toogle="tab" data-target={this.props.target} onClick={() => this.props.selectTab(this.props.target)}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>   
            </IF>
            
        )
    }
}

const mapStateToProps = state => ({
    tab: state.tab
})

const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)