import { combineReducers } from "redux";

import campaignReducer from "./campaignReducer";

const rootReducer = combineReducers({
    campaigns: campaignReducer,
});

export default rootReducer;
