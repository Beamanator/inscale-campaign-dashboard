import React from "react";
import { withRouter } from "react-router";
// import PropTypes from "prop-types";

// @material-ui/core
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

// icons
import CodeIcon from "@material-ui/icons/Code";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";

const RightLinks = () => {
    const classes = makeStyles(styles);

    const handleOpenGithub = () => {
        window.open(
            "https://github.com/Beamanator/inscale-campaign-dashboard",
            "_blank"
        );
    };

    return (
        <Tooltip title="View code on Github">
            <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Open drawer"
                onClick={handleOpenGithub}
            >
                <CodeIcon />
            </IconButton>
        </Tooltip>
    );
};

export default withRouter(RightLinks);
