import React, {Component} from "react";

class TabHeader extends Component{
    render(){
        return (
            <li>
                <a href data-toogle="tab" data-target={this.props.target}></a>
            </li>
        )
    }
}

export default TabHeader