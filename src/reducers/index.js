import { combineReducers } from "redux";
import { hlcBalance } from "./hlcBalance";
import { loadingPage } from "./utils";

const rootReducer = combineReducers({
    
    loading : loadingPage,

    hlcBalance : hlcBalance,
})

export default rootReducer;
