import React, { useState, useEffect } from "react";
import Routes from "./routes";
import { connect } from "react-redux";
import * as actions from "./store/actions";

// layout components
import NavDrawer from "./components/layout/NavDrawer";
import ErrorSnackbar from "./components/ui/ErrorSnackbar";
import TopMenu from "./components/layout/TopMenu";

// @material-ui/core
import CssBaseline from "@material-ui/core/CssBaseline";

// styles
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";

function App({ campaignAdd }) {
    const classes = makeStyles(styles)();
    const [mobileOpen, setMobileOpen] = useState(false);

    // open add-campaign functiontionality to users via console!
    useEffect(() => {
        window.campaignAdd = (campaignConfig) => {
            campaignAdd(campaignConfig);
        };
    });
    // delete add-campaign functionality after app closes
    useEffect(
        () => () => {
            window.campaignAdd = () =>
                console.log("No longer accepting new campaigns. Re-load app.");
        },
        []
    );

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            {/* Basic, standard, nice-looking styles for most HTML elems */}
            <CssBaseline />

            {/* TopMenu */}
            <TopMenu handleDrawerToggle={handleDrawerToggle} />

            {/* NavDrawer */}
            <NavDrawer
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
            />

            {/* Snackbar for campaign-add error messages */}
            <ErrorSnackbar />

            {/* Routes for main content */}
            <main className={classes.content}>
                {/* add vertical spacing so content goes under TopMenu */}
                <div className={classes.toolbar} />

                <Routes />
            </main>
        </div>
    );
}

// const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    campaignAdd: (campaign) => dispatch(actions.campaignAdd(campaign)),
});

export default connect(
    null,
    mapDispatchToProps
)(App);
