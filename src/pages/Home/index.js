import React, { useState } from "react";
import moment from "moment";
// import PropTypes from "prop-types";

//  table information
import MUIDataTable from "mui-datatables";
import columns from "./columns.js";

// @material-ui/core
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";

// table json data
import rawData from "./data.json";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";
import DateFilter from "./DateFilter";

const validateData = (data = []) =>
    data.filter(({ startDate, endDate }) => {
        // remove campaigns with not enough data
        if (!startDate || !endDate) return false;

        return moment(startDate, "MM/DD/YYYY").isBefore(
            moment(endDate, "MM/DD/YYYY")
        );
    });

const processData = (data = []) =>
    data.map((elem) => {
        // consider campaign as "active" is end date is AFTER now
        // -> and start date is BEFORE now
        const isActive =
            moment(elem.endDate, "MM/DD/YYYY").isAfter(moment()) &&
            moment(elem.startDate, "MM/DD/YYYY").isBefore(moment());

        return {
            ...elem,
            active: isActive,
        };
    });

const Home = () => {
    // clean data with initial data validation
    const cleanData = validateData(rawData);

    // process data in any way necessary
    const processedData = processData(cleanData);

    // TODO: leave some kind of open function to add data to table from console!

    const [data, setData] = useState(processedData);

    const classes = makeStyles(styles)();

    const onFilter = ({ startDate, endDate }) => {
        // docs for 'isBetween': https://momentjs.com/docs/#/query/is-between/
        const sortedData = data.filter((item) => {
            // check if start date is in range
            // -> note: after or equal to start, but before end
            const startDateInRange = moment(
                item.startDate,
                "MM/DD/YYYY"
            ).isBetween(moment(startDate), moment(endDate), null, "[)");

            // check if end date is in range
            // -> note: after start, but before or equal to end
            const endDateInRange = moment(item.endDate, "MM/DD/YYYY").isBetween(
                moment(startDate, endDate),
                null,
                "(]"
            );

            // Note to interviewers: The above conditions are the only 2 noted
            // -> in the prompt, but this doesn't consider if some data point
            // -> has a start date before the range AND an end date AFTER the
            // -> range. I didn't include this here because it wasn't in the
            // -> prompt, but it would be useful in a real-world app (I believe).

            return startDateInRange && endDateInRange;
        });

        setData(sortedData);
    };

    const onClearFilter = () => {
        // TODO:
        console.log("clear filter somehow");
    };

    return (
        <>
            <DateFilter onFilter={onFilter} onClearFilter={onClearFilter} />

            <div className={classes.groupSpacer} />

            <MUIDataTable
                data={data}
                columns={columns}
                options={{
                    print: false,
                    responsive: "scrollFullHeight",
                    selectableRows: "single",
                    selectableRowsOnClick: true,
                }}
                title={"All Campaigns"}
            />
        </>
    );
};

Home.propTypes = {};

export default Home;
