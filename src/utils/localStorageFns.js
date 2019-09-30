import {
    addActiveStatusToCampaign,
    validateStartBeforeEndDate,
} from "./campaignFormatFns";

export const storageAvailable = (type) => {
    var storage;
    try {
        storage = window[type];
        var x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0)
        );
    }
};

export const getLocalStorageCampaigns = () => {
    if (storageAvailable("localStorage")) {
        let campaigns = localStorage.getItem("campaigns");

        // parse & filter if any campaigns were loaded
        if (campaigns) {
            // 1. parse json
            campaigns = JSON.parse(campaigns);

            // 2. remove invalid campaigns
            campaigns = campaigns.filter(validateStartBeforeEndDate);

            // 3. add active status to campaign data
            campaigns = campaigns.map(addActiveStatusToCampaign);

            return { campaigns };
        }

        return { campaigns: [] };
    }

    return { err: "localStorage not available in your browser." };
};
