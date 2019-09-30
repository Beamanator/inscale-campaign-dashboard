import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/campaignActions";

// @material-ui/core
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import CloseIcon from "@material-ui/icons/Close";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";

const ErrorSnackbar = ({ campaignError, campaignClearError }) => {
    const classes = makeStyles(styles)();

    const handleClose = (event, reason) => {
        // not a valid reason to close the snackbar
        if (reason === "clickaway") {
            return;
        }

        campaignClearError();
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            open={!!campaignError}
            autoHideDuration={12000}
            onClose={handleClose}
            ContentProps={{
                "aria-describedby": "message-id",
            }}
            message={<span id="message-id">{campaignError}</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    className={classes.close}
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>,
            ]}
        />
    );
};

ErrorSnackbar.propTypes = {
    campaignError: PropTypes.string,
    campaignClearError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    campaignError: state.campaigns.campaignError,
});

const mapDispatchToProps = (dispatch) => ({
    campaignClearError: () => dispatch(actions.campaignClearError()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorSnackbar);
