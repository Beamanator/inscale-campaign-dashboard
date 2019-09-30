import React, { useState, useEffect } from "react";
import moment from "moment";
import PropTypes from "prop-types";

// Date components
import { Grid, Typography } from "@material-ui/core";

// other components
import FilterActions from "./FilterActions";

// validation
import { ValidatorForm } from "react-material-ui-form-validator";
import DateRange from "./DateRange";

const DateFilter = ({ onFilter, onClearFilter }) => {
    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment().add(1, "days"));

    // from: https://stackoverflow.com/questions/55020041/react-hooks-useeffect-cleanup-for-only-componentwillunmount
    // replacement for componentDidMount & componentDidUpdate
    useEffect(() => {
        ValidatorForm.addValidationRule("beforeDate", (date) => {
            return moment(date, "MMM Do, YYYY").isBefore(moment(endDate));
        });
        ValidatorForm.addValidationRule("afterDate", (date) => {
            return moment(date, "MMM Do, YYYY").isAfter(moment(startDate));
        });
    }, [endDate, startDate]);
    // replacement for componentWillUnmount
    useEffect(
        () => () => {
            ValidatorForm.removeValidationRule("beforeDate");
            ValidatorForm.removeValidationRule("afterDate");
        },
        []
    );

    const onSubmit = () => {
        onFilter({ startDate, endDate });
    };

    return (
        <ValidatorForm onSubmit={onSubmit}>
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography variant="h5">
                        Filter campaigns by date range:
                    </Typography>
                </Grid>

                <Grid item>
                    <DateRange
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                    />
                </Grid>

                {/* filter button */}
                <Grid item>
                    <FilterActions onClearFilter={onClearFilter} />
                </Grid>
            </Grid>
        </ValidatorForm>
    );
};

DateFilter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    onClearFilter: PropTypes.func.isRequired,
};

export default DateFilter;
