import React from "react";
import PropTypes from "prop-types";

import { Button, Grid } from "@material-ui/core";

const FilterActions = ({ onClearFilter }) => {
    return (
        <Grid container spacing={2}>
            {/* filter */}
            <Grid item>
                <Button type="submit" variant="contained" color="primary">
                    Filter
                </Button>
            </Grid>

            {/* clear filter */}
            <Grid item>
                <Button
                    onClick={onClearFilter}
                    variant="contained"
                    color="secondary"
                >
                    Clear
                </Button>
            </Grid>
        </Grid>
    );
};

FilterActions.propTypes = {
    onClearFilter: PropTypes.func.isRequired,
};

export default FilterActions;
