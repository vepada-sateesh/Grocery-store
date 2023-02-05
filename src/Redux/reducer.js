import { LoginSucess,LoginFail } from "./actionTypes"
const initialState = {
    isAuth: false,
    token:""
}
const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        
        case "LoginSucess":
            console.log("first")
            return {
                ...state,
                isAuth: true
            }
        case "LoginFail":
            return {
                ...state,
                count:state.count - action.payload
            }
        default:
            return state;
    }
}
export {reducer}