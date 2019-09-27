import React, { useState } from "react";
import propTypes from "prop-types";

//  table information
import MUIDataTable from "mui-datatables";
import columns from "./columns.js";

// @material-ui/core
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// table json data
import rawData from "./data.json";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";

const validateData = (data = []) =>
    data.filter(({ startDate, endDate }) => {
        // remove campaigns with not enough data
        if (!startDate || !endDate) return false;

        return new Date(startDate).getTime() <= new Date(endDate).getTime();
    });

const processData = (data = []) =>
    data.map((elem) => {
        const isActive =
            new Date(elem.endDate).getTime() > new Date().getTime();

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

    return (
        <>
            <Paper className={classes.root}>
                <div>filter stuph!</div>
            </Paper>
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
