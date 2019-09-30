import moment from "moment";

export const validateStartBeforeEndDate = ({ startDate, endDate }) => {
    if (!startDate || !endDate) return false;

    return moment(startDate, "MM/DD/YYYY").isBefore(
        moment(endDate, "MM/DD/YYYY")
    );
};

export const addActiveStatusToCampaign = (campaignData) => {
    // consider campaign as "active" if end date is AFTER now
    // -> and start date is BEFORE now
    const isActive =
        moment(campaignData.endDate, "MM/DD/YYYY").isAfter(moment()) &&
        moment(campaignData.startDate, "MM/DD/YYYY").isBefore(moment());

    return {
        ...campaignData,
        active: isActive,
    };
};
