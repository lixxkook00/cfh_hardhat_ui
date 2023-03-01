import { combineReducers } from "redux";
import { hlcBalance } from "./hlcBalance";
import { loadingPage } from "./utils";
import { userInfor } from "./userInfor";

const rootReducer = combineReducers({
    
    loading : loadingPage,

    hlcBalance : hlcBalance,

    userInfor : userInfor
})

export default rootReducer;
