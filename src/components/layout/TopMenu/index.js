import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";

// @material-ui/core
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// components
import LeftLinks from "./LeftLinks";
import RightLinks from "./RightLinks";

const TopMenu = ({ handleDrawerToggle }) => {
    const classes = makeStyles(styles)();

    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar>
                <LeftLinks handleDrawerToggle={handleDrawerToggle} />
                <div className={classes.grow} />
                <RightLinks />
            </Toolbar>
        </AppBar>
    );
};

TopMenu.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default TopMenu;
