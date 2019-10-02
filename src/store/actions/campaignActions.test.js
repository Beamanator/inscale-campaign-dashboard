import * as actions from "./campaignActions";
import * as actionTypes from "./actionTypes";

beforeEach(() => {});

afterEach(() => {});

describe("capaign actions", () => {
    // not exactly sure how to test campaignAdd b/c it's doing stuff with
    // -> dispatch(action)
    // it("should add a campaign successfully", () => {});

    it("should create an action to remove a campaign", () => {
        const initialCampaigns = [
            {
                id: 1,
                name: "campaign1",
                startDate: "1/1/2019",
                endDate: "1/15/2019",
                budget: 1234567,
            },
        ];

        const expectedAction = {
            type: actionTypes.CAMPAIGN_REMOVE,
            campaigns: [],
        };

        expect(actions.campaignRemove(0, initialCampaigns)).toEqual(
            expectedAction
        );
    });

    it("should create an action to clear campaign errors", () => {
        const expectedAction = {
            type: actionTypes.CAMPAIGN_CLEAR_ERROR,
        };

        expect(actions.campaignClearError()).toEqual(expectedAction);
    });
});
