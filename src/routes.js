import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Four04 from "./pages/404";

const Routes = ({ location }) => {
    const pathname = location.pathname;

    // set default route to home
    if (pathname === "/") return <Redirect to="/home" />;

    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={Four04} />
        </Switch>
    );
};

Routes.propTypes = {
    location: PropTypes.object.isRequired,
};

export default withRouter(Routes);
