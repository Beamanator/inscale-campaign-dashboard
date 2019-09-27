const navDrawerWidth = 240;

const styles = (theme) => ({
    root: {
        marginLeft: navDrawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${navDrawerWidth}px)`,
        },
    },
    grow: {
        flexGrow: 1,
    },
});

export default styles;
