import axios from "axios"
const BASE_URL = "http://localhost:3002/api"

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: "BILLING_CYCLES_FETCHED",
        payload: request
    }
}

export function create(values){
    console.log(values)
    axios.post()`${BASE_URL}/billingCycles`, values)
    return {
        type: "BILLING_CYCLES_FETCHED",
        payload: request
    }
}