import React, { useState } from "react";
import Routes from "./routes";

// layout components
import NavDrawer from "./components/layout/NavDrawer";

// @material-ui/core
import CssBaseline from "@material-ui/core/CssBaseline";
// import classes from "*.module.sass";

// styles
import { makeStyles } from "@material-ui/styles";
import styles from "./styles";
import TopMenu from "./components/layout/TopMenu";

function App() {
    const classes = makeStyles(styles)();

    const [mobileOpen, setMobileOpen] = useState(false);

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

            {/* Routes for main content */}
            <main className={classes.content}>
                {/* add vertical spacing so content goes under TopMenu */}
                <div className={classes.toolbar} />

                <Routes />
            </main>
        </div>
    );
}

export default App;
