import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./campaignActions";
import * as actionTypes from "./actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("capaign actions", () => {
    // --> adding campaigns
    it("should throw an error if invalid params are passed", () => {
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error:
                    'Invalid parameter for "campaignAdd" function. ' +
                    "Please pass config object with all required campaign details.",
            },
        ];
        const store = mockStore({ campaigns: [] });

        store.dispatch(actions.campaignAdd("why a string?"));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should throw an error if campaign's id is missing", () => {
        const fakeCampaign = {
            // id: Math.floor(Math.random() * 1000),
            name: "Salt them cashews",
            startDate: "01/25/2002",
            endDate: "07/12/2004",
            budget: 123456,
        };
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error:
                    "Some data is missing. Here is the data you passed:\n" +
                    `id: ${fakeCampaign.id},\n` +
                    `name: ${fakeCampaign.name},\n` +
                    `startDate: ${fakeCampaign.startDate},\n` +
                    `endDate: ${fakeCampaign.endDate},\n` +
                    `budget: ${fakeCampaign.budget}.`,
            },
        ];
        const store = mockStore({ campaigns: [] });

        store.dispatch(actions.campaignAdd(fakeCampaign));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should throw an error if campaign's name is missing", () => {
        const fakeCampaign = {
            id: Math.floor(Math.random() * 1000),
            // name: "Salt them cashews",
            startDate: "01/25/2002",
            endDate: "07/12/2004",
            budget: 123456,
        };
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error:
                    "Some data is missing. Here is the data you passed:\n" +
                    `id: ${fakeCampaign.id},\n` +
                    `name: ${fakeCampaign.name},\n` +
                    `startDate: ${fakeCampaign.startDate},\n` +
                    `endDate: ${fakeCampaign.endDate},\n` +
                    `budget: ${fakeCampaign.budget}.`,
            },
        ];
        const store = mockStore({ campaigns: { campaigns: [] } });

        store.dispatch(actions.campaignAdd(fakeCampaign));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should throw an error if campaign's startDate is missing", () => {
        const fakeCampaign = {
            id: Math.floor(Math.random() * 1000),
            name: "Salt them cashews",
            // startDate: "01/25/2002",
            endDate: "07/12/2004",
            budget: 123456,
        };
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error:
                    "Some data is missing. Here is the data you passed:\n" +
                    `id: ${fakeCampaign.id},\n` +
                    `name: ${fakeCampaign.name},\n` +
                    `startDate: ${fakeCampaign.startDate},\n` +
                    `endDate: ${fakeCampaign.endDate},\n` +
                    `budget: ${fakeCampaign.budget}.`,
            },
        ];
        const store = mockStore({ campaigns: { campaigns: [] } });

        store.dispatch(actions.campaignAdd(fakeCampaign));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should throw an error if campaign's endDate is missing", () => {
        const fakeCampaign = {
            id: Math.floor(Math.random() * 1000),
            name: "Salt them cashews",
            startDate: "01/25/2002",
            // endDate: "07/12/2004",
            budget: 123456,
        };
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error:
                    "Some data is missing. Here is the data you passed:\n" +
                    `id: ${fakeCampaign.id},\n` +
                    `name: ${fakeCampaign.name},\n` +
                    `startDate: ${fakeCampaign.startDate},\n` +
                    `endDate: ${fakeCampaign.endDate},\n` +
                    `budget: ${fakeCampaign.budget}.`,
            },
        ];
        const store = mockStore({ campaigns: { campaigns: [] } });

        store.dispatch(actions.campaignAdd(fakeCampaign));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should throw an error if campaign's budget is missing", () => {
        const fakeCampaign = {
            id: Math.floor(Math.random() * 1000),
            name: "Salt them cashews",
            // startDate: "01/25/2002",
            endDate: "07/12/2004",
            budget: 123456,
        };
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error:
                    "Some data is missing. Here is the data you passed:\n" +
                    `id: ${fakeCampaign.id},\n` +
                    `name: ${fakeCampaign.name},\n` +
                    `startDate: ${fakeCampaign.startDate},\n` +
                    `endDate: ${fakeCampaign.endDate},\n` +
                    `budget: ${fakeCampaign.budget}.`,
            },
        ];
        const store = mockStore({ campaigns: { campaigns: [] } });

        store.dispatch(actions.campaignAdd(fakeCampaign));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should throw an error if campaign's id is invalid", () => {
        const fakeCampaign = {
            id: ["so", "many", "ids"],
            name: 28008,
            startDate: "15/5/2002",
            endDate: "17/91/2004",
            budget: "123456 iz muh budgit",
        };
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error:
                    "Validation error. These fields have incorrect format:\n" +
                    `id (string|number): found ${typeof fakeCampaign.id},\n` +
                    `name (string): found ${typeof fakeCampaign.name},\n` +
                    `startDate (Date - MM/DD/YYYY): found ${fakeCampaign.startDate},\n` +
                    `endDate (Date - MM/DD/YYYY): found ${fakeCampaign.endDate},\n` +
                    `budget (number): found ${typeof fakeCampaign.budget},`,
            },
        ];
        const store = mockStore({ campaigns: { campaigns: [] } });

        store.dispatch(actions.campaignAdd(fakeCampaign));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should throw an error if start date doesn't come before end date", () => {
        const fakeCampaign = {
            id: Math.floor(Math.random() * 1000),
            name: "Salt them cashews",
            startDate: "01/25/2005",
            endDate: "07/12/2004",
            budget: 123456,
        };
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error:
                    "Validation error. Start date needs to come before end date.",
            },
        ];
        const store = mockStore({ campaigns: { campaigns: [] } });

        store.dispatch(actions.campaignAdd(fakeCampaign));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should throw an error if campaign id number isn't unique", () => {
        const fakeCampaign = {
            id: 123,
            name: "Salt them cashews",
            startDate: "01/25/2002",
            endDate: "07/12/2004",
            budget: 123456,
        };
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD_ERROR,
                error: `Error. Found existing campaign with id: ${fakeCampaign.id}.`,
            },
        ];
        const store = mockStore({
            campaigns: {
                campaigns: [
                    {
                        id: 123,
                        name: "Another nutty campaign",
                        startDate: "11/23/2002",
                        endDate: "08/22/2005",
                        budget: 123456,
                    },
                ],
            },
        });

        store.dispatch(actions.campaignAdd(fakeCampaign));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should successfully add campaign if no errors in data", () => {
        const fakeCampaign = {
            id: 123,
            name: "Salt them cashews",
            startDate: "01/25/2002",
            endDate: "07/12/2004",
            budget: 123456,
        };
        const expectedActions = [
            {
                type: actionTypes.CAMPAIGN_ADD,
                campaign: {
                    active: false,
                    ...fakeCampaign,
                },
            },
        ];
        const store = mockStore({ campaigns: { campaigns: [] } });

        store.dispatch(actions.campaignAdd(fakeCampaign));
        expect(store.getActions()).toEqual(expectedActions);
    });

    // --> remove campaign(s)
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

    // --> clearing campaign error(s)
    it("should create an action to clear campaign errors", () => {
        const expectedAction = {
            type: actionTypes.CAMPAIGN_CLEAR_ERROR,
        };

        expect(actions.campaignClearError()).toEqual(expectedAction);
    });
});
