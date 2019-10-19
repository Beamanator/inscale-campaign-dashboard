import React, { useEffect } from "react";

// @material-ui/core
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons
import BrokenLinkIcon from "@material-ui/icons/LinkOff";

// styles
import styles from "./styles";
import { makeStyles } from "@material-ui/styles";

// react-router
import { Link } from "react-router-dom";

const Four04 = () => {
    const classes = makeStyles(styles)();

    useEffect(() => {
        document.title = "Campaign Dashboard - 404";
    }, []);

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            alignContent="center"
            className={classes.root}
        >
            <Grid item>
                <Typography variant="h3">
                    <BrokenLinkIcon fontSize="inherit" color="inherit" />
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h3" className={classes.boldText}>
                    404
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="caption" className={classes.caption}>
                    PAGE NOT FOUND
                </Typography>
            </Grid>
            <Grid item>
                <Link
                    className={classes.backLink}
                    to="/home"
                    data-testid="go-home"
                >
                    Back Home
                </Link>
            </Grid>
        </Grid>
    );
};

export default Four04;
