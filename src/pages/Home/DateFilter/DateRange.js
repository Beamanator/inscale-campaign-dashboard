import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import CustomDatePicker from "../../../components/ui/DatePicker";

const DateRange = ({ startDate, setStartDate, endDate, setEndDate }) => {
    return (
        <Grid container spacing={2}>
            {/* start date */}
            <Grid item>
                <CustomDatePicker
                    label="Campaign Active After..."
                    value={startDate}
                    setDate={setStartDate}
                    validators={["beforeDate"]}
                    errorMessages={["Must come before next date"]}
                />
            </Grid>

            {/* end date */}
            <Grid item>
                <CustomDatePicker
                    label="Campaign Active Before..."
                    value={endDate}
                    setDate={setEndDate}
                    validators={["afterDate"]}
                    errorMessages={["Must come after previous date"]}
                />
            </Grid>
        </Grid>
    );
};

DateRange.propTypes = {
    setStartDate: PropTypes.func.isRequired,
    startDate: PropTypes.any.isRequired,
    setEndDate: PropTypes.func.isRequired,
    endDate: PropTypes.any.isRequired,
};

export default DateRange;
