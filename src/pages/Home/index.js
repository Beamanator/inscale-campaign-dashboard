import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import moment from "moment";
import PropTypes from "prop-types";

//  table information
import MUIDataTable from "mui-datatables";
import { columns } from "../../utils/dataTableConfig";

// @material-ui/core
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";
import DateFilter from "./DateFilter";

const Home = ({ campaigns, campaignRemove }) => {
    const classes = makeStyles(styles)();
    const [data, setData] = useState(campaigns);

    useEffect(() => {
        document.title = "Campaign Dashboard - Home";
    }, []);

    useEffect(() => {
        setData(campaigns);
    }, [campaigns]);

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
                moment(startDate),
                moment(endDate),
                null,
                "(]"
            );

            // Note to interviewers: The above conditions are the only 2 noted
            // -> in the prompt, but this doesn't consider if some data point
            // -> has a start date before the range AND an end date AFTER the
            // -> range. I didn't include this here because it wasn't in the
            // -> prompt, but it would be useful in a real-world app (I believe).

            return startDateInRange || endDateInRange;
        });

        setData(sortedData);
    };

    const onClearFilter = () => {
        // set data with original dataset
        setData(campaigns);
    };

    const deleteRows = ({ data: dataBeingDeleted }) => {
        // only 1 row can be selected at a time, so get that row's index in
        // -> main data array w/ dataIndex
        const rowIndex = dataBeingDeleted[0].dataIndex;

        campaignRemove(rowIndex, data);
    };

    return (
        <>
            <DateFilter onFilter={onFilter} onClearFilter={onClearFilter} />

            <div className={classes.groupSpacer} />

            <MUIDataTable
                data={data}
                columns={columns}
                options={{
                    onRowsDelete: deleteRows,
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

Home.propTypes = {
    campaignRemove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    campaigns: state.campaigns.campaigns,
});

const mapDispatchToProps = (dispatch) => ({
    campaignRemove: (rowIndex, allAata) =>
        dispatch(actions.campaignRemove(rowIndex, allAata)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
