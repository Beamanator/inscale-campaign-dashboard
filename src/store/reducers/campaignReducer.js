import * as actionTypes from "../actions/actionTypes";
import { getLocalStorageCampaigns } from "../../utils/localStorageFns";

const loadInitialCampaigns = () => {
    let initState = {
        campaigns: [],
        campaignError: null,
    };

    let localStorageCampaigns = getLocalStorageCampaigns();

    if (localStorageCampaigns.err) {
        initState.campaignError = localStorageCampaigns.err;
    } else {
        initState.campaigns = localStorageCampaigns.campaigns;
    }

    return initState;
};

const campaignReducer = (state = loadInitialCampaigns(), action) => {
    switch (action.type) {
        case actionTypes.CAMPAIGN_ADD:
            return {
                ...state,
                campaigns: [...state.campaigns, action.campaign],
                campaignError: null,
            };

        case actionTypes.CAMPAIGN_ADD_ERROR:
            return {
                ...state,
                campaignError: action.error,
            };

        case actionTypes.CAMPAIGN_CLEAR_ERROR:
            return {
                ...state,
                campaignError: null,
            };

        case actionTypes.CAMPAIGN_REMOVE:
            return {
                ...state,
                campaigns: [...action.campaigns],
                campaignError: null,
            };

        default:
            return { ...state };
    }
};

export default campaignReducer;
