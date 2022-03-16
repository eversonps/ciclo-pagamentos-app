import axios from "axios"
const BASE_URL = "http://localhost:3002/api"
import { toastr } from "react-redux-toastr"
import { reset as resetForm} from "redux-form"

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: "BILLING_CYCLES_FETCHED",
        payload: request
    }
}

export function create(values){
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success("Sucesso", "Operação realizada com sucesso")
        }).catch(e => {
            e.response.data.errors.forEach(error => {
            toastr.error("Erro", error)
        })
    })
    }
}