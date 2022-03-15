import React, {Component} from "react";

export default class Grid extends Component{
    toCssClassses(numbers){
        const cols = numbers ? numbers.split(" ") : []
        let classes = ""
        
        if(cols[0]) classes += `col-xs-${cols[0]}`
    }
}