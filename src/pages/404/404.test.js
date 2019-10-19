import React from "react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Routes from "../../routes";
import {
    cleanup,
    render,
    fireEvent,
    waitForElement,
} from "@testing-library/react";
import configureMockStore from "redux-mock-store";

// pick a date util library
import MomentUtils from "@date-io/moment";

const theme = createMuiTheme();
const mockStore = configureMockStore();
const store = mockStore({
    campaigns: [],
    campaignError: null,
});

// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = () =>
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[`/nonHomeOrAbout`]}>
                <ThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Routes />
                    </MuiPickersUtilsProvider>
                </ThemeProvider>
            </MemoryRouter>
        </Provider>
    );

describe("404 page", () => {
    afterEach(cleanup);

    it("renders 404 with a few required elements", async () => {
        const { getByText } = renderComponent();

        await waitForElement(() => getByText(/404/));
        await waitForElement(() => getByText(/page not found/i));
    });

    it("redirects to /home when Link clicked", () => {
        const { getByTestId, getByText } = renderComponent();

        const goHomeButton = getByTestId("go-home");

        fireEvent.click(goHomeButton);

        // find text on element from home page
        expect(getByText(/Filter campaigns by date range:/i)).toBeTruthy();
    });
});
