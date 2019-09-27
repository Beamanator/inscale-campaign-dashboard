const NAV_DRAWER_WIDTH = 240;

const styles = (theme) => ({
    active: {
        backgroundColor: "#eaeaea",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: NAV_DRAWER_WIDTH,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: NAV_DRAWER_WIDTH,
    },
    toolbar: theme.mixins.toolbar,
});

export default styles;
