import axios from "axios"

const BASE_URL = "http://localhost:3002/api"

export function getSummary(){
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
}