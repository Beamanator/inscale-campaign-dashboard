import * as actionTypes from "../actions/actionTypes";
import campaignReducer from "./campaignReducer";

const initState = {
    campaigns: [],
    campaignError: null,
};

describe("campaign reducer", () => {
    it("should return the initial state", () => {
        // {} represents an empty action type (not needed for init load)
        expect(campaignReducer(undefined, {})).toEqual(initState);
    });

    it("should load state with error if local storage unavailable", () => {
        delete window["localStorage"];

        // {} represents an empty action type (not needed for init load)
        expect(campaignReducer(undefined, {})).not.toBe(initState);
    });

    it("should handle action type CAMPAIGN_ADD", () => {
        const fakeCampaign = {
            id: Math.floor(Math.random() * 1000),
            name: "Salt them cashews",
            startDate: "01/25/2002",
            endDate: "07/12/2004",
            budget: 123456,
        };

        expect(
            campaignReducer(initState, {
                type: actionTypes.CAMPAIGN_ADD,
                campaign: { ...fakeCampaign },
            })
        ).toEqual({
            campaigns: [{ ...fakeCampaign }],
            campaignError: null,
        });
    });

    it("should handle action type CAMPAIGN_ADD_ERROR", () => {
        const testErrorMsg = "this is a test error msg";
        expect(
            campaignReducer(initState, {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error: testErrorMsg,
            })
        ).toEqual({
            campaigns: initState.campaigns,
            campaignError: testErrorMsg,
        });
    });

    it("should handle action type CAMPAIGN_CLEAR_ERROR", () => {
        expect(
            campaignReducer(
                {
                    campaigns: [],
                    campaignError: "This is another test error msg",
                },
                {
                    type: actionTypes.CAMPAIGN_CLEAR_ERROR,
                }
            )
        ).toEqual({
            campaigns: [],
            campaignError: null,
        });
    });

    it("should handle action type CAMPAIGN_REMOVE", () => {
        const fakeCampaign = {
            id: Math.floor(Math.random() * 1000),
            name: "Salt them cashews",
            startDate: "01/25/2002",
            endDate: "07/12/2004",
            budget: 123456,
        };

        expect(
            campaignReducer(
                {
                    campaigns: [fakeCampaign],
                    campaignError: null,
                },
                {
                    type: actionTypes.CAMPAIGN_REMOVE,
                    campaigns: [],
                }
            )
        ).toEqual({
            campaigns: [],
            campaignError: null,
        });
    });
});
