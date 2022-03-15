import React, {Component} from "react";
import { connect } from "react-redux";
import {bindActionCreators}

class TabContent extends Component{
    render(){
        return (
            <div id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}