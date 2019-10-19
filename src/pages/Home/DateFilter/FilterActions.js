import React from "react";
import PropTypes from "prop-types";

import { Button, Grid } from "@material-ui/core";

const FilterActions = ({ onClearFilter }) => {
    return (
        <Grid container spacing={2}>
            {/* filter */}
            <Grid item>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    data-testid="filter-campaigns"
                >
                    Filter
                </Button>
            </Grid>

            {/* clear filter */}
            <Grid item>
                <Button
                    onClick={onClearFilter}
                    variant="contained"
                    color="secondary"
                    data-testid="clear-filter"
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
