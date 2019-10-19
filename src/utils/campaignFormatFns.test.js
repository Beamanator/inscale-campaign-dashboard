import {
    validateStartBeforeEndDate,
    addActiveStatusToCampaign,
} from "./campaignFormatFns";
import moment from "moment";

describe("utils", () => {
    it("handles empty start and end dates", () => {
        const emptyStartDate = validateStartBeforeEndDate({
            endDate: moment(),
        });
        const emptyEndDate = validateStartBeforeEndDate({
            startDate: moment(),
        });

        expect(emptyStartDate).toBe(false);
        expect(emptyEndDate).toBe(false);
    });

    it("correctly validates start date is before end date", () => {
        // end date 1 day after start date
        expect(
            validateStartBeforeEndDate({
                startDate: moment(),
                endDate: moment().add(1, "day"),
            })
        ).toBe(true);

        // end date SAME AS start date
        expect(
            validateStartBeforeEndDate({
                startDate: moment(),
                endDate: moment(),
            })
        ).toBe(false);

        // end date 1 day before start date
        expect(
            validateStartBeforeEndDate({
                startDate: moment(),
                endDate: moment().subtract(1, "day"),
            })
        ).toBe(false);
    });

    it("adds correct active status to passed object", () => {
        // clearly active campaign
        const activeCampaign = addActiveStatusToCampaign({
            startDate: moment().subtract(1, "day"),
            endDate: moment().add(1, "day"),
        });

        expect(activeCampaign).toHaveProperty("active");
        expect(activeCampaign.active).toBe(true);

        // clearly inactive campaign (start date after now)
        const inactiveCampaign = addActiveStatusToCampaign({
            startDate: moment().add(1, "day"),
            endDate: moment().add(1, "day"),
        });

        // clearly inactive campaign (end date before now)
        const inactiveCampaign2 = addActiveStatusToCampaign({
            startDate: moment().subtract(1, "day"),
            endDate: moment().subtract(1, "day"),
        });

        expect(inactiveCampaign).toHaveProperty("active");
        expect(inactiveCampaign.active).toBe(false);

        expect(inactiveCampaign2).toHaveProperty("active");
        expect(inactiveCampaign2.active).toBe(false);

        // edge case - inactive campaign (start date same as now)
        const inactiveCampaignEdge = addActiveStatusToCampaign({
            startDate: moment(),
            endDate: moment().add(1, "day"),
        });

        // edge case - inactive campaign (end date same as now)
        const inactiveCampaignEdge2 = addActiveStatusToCampaign({
            startDate: moment().subtract(1, "day"),
            endDate: moment(),
        });

        expect(inactiveCampaignEdge).toHaveProperty("active");
        expect(inactiveCampaignEdge.active).toBe(false);

        expect(inactiveCampaignEdge2).toHaveProperty("active");
        expect(inactiveCampaignEdge2.active).toBe(false);
    });
});
