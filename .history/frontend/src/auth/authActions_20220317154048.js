import { toastr } from "react-redux-toastr"
import axios from "axios"
import consts from "../main/consts"

function submit(values, url){
    return dispatch => {
        axios.post(url, values)
        .then(resp => {
            
        })
    }
}