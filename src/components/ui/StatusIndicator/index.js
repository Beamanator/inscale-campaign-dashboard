import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";

const StatusIndicator = ({ isActive }) => {
    const classes = makeStyles(styles)();

    const text = isActive ? "Active" : "Inactive";
    const circleColorClass = isActive ? classes.circleGreen : classes.circleRed;

    return (
        <div className={classes.root}>
            <div className={[classes.circle, circleColorClass].join(" ")} />
            <div data-testid="status-text">{text}</div>
        </div>
    );
};

StatusIndicator.propTypes = {
    isActive: PropTypes.bool.isRequired,
};

export default StatusIndicator;
