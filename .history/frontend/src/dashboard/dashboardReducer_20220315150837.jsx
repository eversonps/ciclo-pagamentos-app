const INITIAL_STATE = {
    credit: 100, 
    debt: 50
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload.data)
    switch(action.type){
        case "BILLING_SUMMARY_FETCHED":
            return {...state, summary: action.payload.data}
        default:
            return state
    }
}