import axios from "axios"
const BASE_URL = "http://localhost:3002/api"
import { toastr } from "react-redux-toastr"

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: "BILLING_CYCLES_FETCHED",
        payload: request
    }
}

export function create(values){
    axios.post(`${BASE_URL}/billingCycles`, values)
    .then(resp => {
        
    })

    return {
        type: "TEMP",
    }
}