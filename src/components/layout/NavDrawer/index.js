import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// @material-ui/core
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";

// @material-ui/icons
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
// import InsertChartIcon from "@material-ui/icons/InsertChart";
// import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
// import PersonAddIcon from "@material-ui/icons/PersonAdd";
import UsersIcon from "@material-ui/icons/Face";
// import TeamsIcon from "@material-ui/icons/People";
// import RolesIcon from "@material-ui/icons/FormatListBulleted";
// import SettingsIcon from "@material-ui/icons/Settings";
// import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";

// styles
import styles from "./styles";

const NavDrawer = ({ handleDrawerToggle, mobileOpen }) => {
    const classes = makeStyles(styles)();

    const drawer = (
        <div>
            <div
                className={
                    classes.toolbar + " " + classes.centeredTextContainer
                }
            >
                <Typography className={classes.centeredTextChild}>
                    by The Beamanator
                </Typography>
            </div>
            <Divider className={classes.vertMargin} />
            <List style={{ backgroundColor: "white" }}>
                {[
                    {
                        Icon: HomeIcon,
                        label: "Home",
                        path: "/home",
                    },
                    {
                        Icon: UsersIcon,
                        label: "About",
                        path: "/about",
                    },
                ].map(({ Icon, label, path }) => (
                    <ListItem
                        button
                        key={label}
                        activeClassName={classes.active}
                        component={NavLink}
                        to={path}
                    >
                        <ListItemIcon>
                            <Icon />
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <nav className={classes.drawer} aria-label="table types">
            <Hidden smUp implementation="js">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="js">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
};

NavDrawer.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
};

export default NavDrawer;
