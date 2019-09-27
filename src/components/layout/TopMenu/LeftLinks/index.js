import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// @material-ui/core
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const LeftLinks = ({ handleDrawerToggle }) => {
    const classes = makeStyles(styles);

    return (
        <>
            <Hidden smUp>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
            </Hidden>
            <Typography variant="h5">Campaign List</Typography>
        </>
    );
};

LeftLinks.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default LeftLinks;
