// import * as actionTypes from "../actions/actionTypes";
import campaignReducer from "./campaignReducer";

describe("campaign reducer", () => {
    // Note: technically this one only works as below if there's no
    // -> campaigns in local storage... I didn't have time to test
    // -> ALL test cases :(
    it("should return the initial state", () => {
        // {} represents an empty action type (not needed for init load)
        expect(campaignReducer(undefined, {})).toEqual({
            campaigns: [],
            campaignError: null,
        });
    });
});
