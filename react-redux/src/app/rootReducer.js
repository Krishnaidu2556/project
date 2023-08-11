import { combineReducers } from "redux";
import userReducer from "../feature/userReducer";

const rootReducer=combineReducers({
    user:userReducer,
})

export default rootReducer;