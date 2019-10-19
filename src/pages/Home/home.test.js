import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Home } from "./index";
import {
    cleanup,
    render,
    fireEvent,
    waitForElement,
} from "@testing-library/react";

// pick a date util library
import MomentUtils from "@date-io/moment";

const theme = createMuiTheme();
const store = {
    campaigns: [
        {
            id: 1,
            active: false,
            name: "my campaign",
            startDate: "1/22/1992",
            endDate: "4/30/1995",
            budget: 123123123,
        },
        {
            id: 2,
            active: false,
            name: "my campaign2",
            startDate: "1/22/1993",
            endDate: "4/30/1996",
            budget: 123123124,
        },
    ],
    campaignError: null,
};

// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = () =>
    render(
        <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Home campaigns={store.campaigns} campaignRemove={() => {}} />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );

describe("home page", () => {
    afterEach(cleanup);

    it("renders home with a few required elements", async () => {
        const { getByText, getByTestId, getAllByText } = renderComponent();

        await waitForElement(() =>
            getByText(/Filter campaigns by date range:/i)
        );
        await waitForElement(() => getByTestId("spacer"));
        await waitForElement(() => getAllByText("All Campaigns"));
    });

    it("renders a table row for each campaign", () => {
        const { getAllByTestId } = renderComponent();

        const rows = getAllByTestId(/MUIDataTableBodyRow/);

        expect(rows.length).toBe(store.campaigns.length);
    });

    it("removes a table row when delete is clicked", () => {
        const { getAllByTestId, getByTitle } = renderComponent();

        const firstRow = getAllByTestId(/MUIDataTableBodyRow/)[0];

        fireEvent.click(firstRow);

        const deleteIcon = getByTitle(/delete/i);

        fireEvent.click(deleteIcon);

        const finalRows = getAllByTestId(/MUIDataTableBodyRow/);

        expect(finalRows.length).toBe(1);
    });

    // in progress...
    // it("filters data when filter button clicked", () => {
    //     const { getAllByTestId, getByTestId } = renderComponent();

    //     const [beforeDate, afterDate] = getAllByTestId("date-picker");

    //     const beforeInput = beforeDate.querySelector("input");

    //     beforeInput.value = "Jan 1st, 1993";

    //     console.log(beforeInput.value);

    //     const filterButton = getByTestId("filter-campaigns");

    //     fireEvent.click(filterButton);

    //     const finalRows = getAllByTestId(/MUIDataTableBodyRow/);

    //     expect(finalRows.length).toBe(1);
    // });
});
