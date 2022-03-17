const userKey = "_mymoney_user"

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "TOKEN_INVALIDED":
            if(action.payload){
                return {...state, validToken: true}
            }else {
                localStorage.removeItem(userKey)
            }
    }
}