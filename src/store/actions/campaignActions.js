import * as actionTypes from "./actionTypes";
import moment from "moment";
import { getLocalStorageCampaigns } from "../../utils/localStorageFns";
import {
    addActiveStatusToCampaign,
    validateStartBeforeEndDate,
} from "../../utils/campaignFormatFns";

export const campaignAdd = (campaignConfig = {}) => {
    return (dispatch, getState) => {
        // 1. Validate incoming data
        if (typeof campaignConfig !== "object") {
            const err =
                'Invalid parameter for "campaignAdd" function. ' +
                "Please pass config object with all required campaign details.";
            console.error(err);
            dispatch({ type: actionTypes.CAMPAIGN_ADD_ERROR, error: err });
            return;
        }

        // 1.1. Get required data from campaign config & validate fields are populated
        const { id, name, startDate, endDate, budget } = campaignConfig;

        if (!id || !name || !startDate || !endDate || !budget) {
            const err =
                "Some data is missing. Here is the data you passed:\n" +
                `id: ${id},\n` +
                `name: ${name},\n` +
                `startDate: ${startDate},\n` +
                `endDate: ${endDate},\n` +
                `budget: ${budget}.`;
            console.error(err);
            dispatch({ type: actionTypes.CAMPAIGN_ADD_ERROR, error: err });
            return;
        }

        // 1.2. Validate data is proper format
        let formatErr = "";

        if (typeof id !== "number" && typeof id !== "string")
            formatErr += `id (string|number): found ${typeof id},\n`;
        if (typeof name !== "string")
            formatErr += `name (string): found ${typeof name},\n`;
        if (!moment(startDate, "MM/DD/YYYY").isValid())
            formatErr += `startDate (Date - MM/DD/YYYY): found ${startDate},\n`;
        if (!moment(endDate, "MM/DD/YYYY").isValid())
            formatErr += `endDate (Date - MM/DD/YYYY): found ${endDate},\n`;
        if (typeof budget !== "number")
            formatErr += `budget (number): found ${typeof budget},`;

        if (formatErr.length > 0) {
            const err =
                "Validation error. These fields have incorrect format:\n" +
                formatErr;
            console.error(err);
            dispatch({ type: actionTypes.CAMPAIGN_ADD_ERROR, error: err });
            return;
        }

        // 1.3. Validate start date comes before end date
        if (!validateStartBeforeEndDate(campaignConfig)) {
            const err =
                "Validation error. Start date needs to come before end date.";
            console.error(err);
            dispatch({ type: actionTypes.CAMPAIGN_ADD_ERROR, error: err });
            return;
        }

        // 1.4. Validate 'id' is unique
        const currentCampaigns = getState().campaigns.campaigns;
        const foundMatchingId = currentCampaigns.some(
            (currentCampaign) => currentCampaign.id === id
        );

        if (foundMatchingId) {
            const err = `Error. Found existing campaign with id: ${id}.`;
            console.error(err);
            dispatch({ type: actionTypes.CAMPAIGN_ADD_ERROR, error: err });
            return;
        }

        // 2. Process incoming data (add 'active' status)
        // -> NOTE: at this point, there should be no errors in the data
        campaignConfig = addActiveStatusToCampaign(campaignConfig);

        // 3: add campaign to local storage
        let localStorageCampaigns = getLocalStorageCampaigns();

        if (localStorageCampaigns.campaigns) {
            let newLocalStorageCampaigns = localStorageCampaigns.campaigns.concat(
                campaignConfig
            );

            localStorage.setItem(
                "campaigns",
                JSON.stringify(newLocalStorageCampaigns)
            );
        }
        // error - don't worry, just skip adding this campaign to local storage
        else {
        }

        // 4. add new campaign to existing campaigns
        dispatch({
            type: actionTypes.CAMPAIGN_ADD,
            campaign: { ...campaignConfig },
        });
    };
};

export const campaignRemove = (rowIndex, allData) => {
    let campaigns = [...allData];
    let campaignId = allData[rowIndex].id;

    // cut out the one that was deleted
    campaigns.splice(rowIndex, 1);

    // remove campaign from local storage too
    let localStorageCampaigns = getLocalStorageCampaigns();

    if (localStorageCampaigns.campaigns) {
        let newLocalStorageCampaigns = [...localStorageCampaigns.campaigns];

        // find campaign index in local storage
        let localStorageIndex = null;
        newLocalStorageCampaigns.forEach(({ id }, index) => {
            if (campaignId === id) localStorageIndex = index;
        });

        // remove campaign from local storage arr
        newLocalStorageCampaigns.splice(localStorageIndex, 1);

        // update local storage
        localStorage.setItem(
            "campaigns",
            JSON.stringify(newLocalStorageCampaigns)
        );
    }

    return { type: actionTypes.CAMPAIGN_REMOVE, campaigns: campaigns };
};

export const campaignClearError = () => {
    return { type: actionTypes.CAMPAIGN_CLEAR_ERROR };
};
