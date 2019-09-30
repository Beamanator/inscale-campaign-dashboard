import React from "react";
// import PropTypes from "prop-types";
import { withRouter } from "react-router";
// import { Link } from "react-router-dom";

// @material-ui/core
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

// icons
import CodeIcon from "@material-ui/icons/Code";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";

const RightLinks = ({ history }) => {
    const classes = makeStyles(styles);

    const handleOpenGithub = () => {
        console.error("ADD HERE BBYYY");
        window.open("https://github.com/Beamanator", "_blank");
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
