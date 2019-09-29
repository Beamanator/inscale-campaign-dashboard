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
    vertMargin: {
        marginTop: 1,
    },
    centeredTextContainer: {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
    },
    centeredTextChild: {
        flex: 1,
    },
});

export default styles;
