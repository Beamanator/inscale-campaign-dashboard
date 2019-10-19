import React from "react";
import { cleanup, render, waitForElement } from "@testing-library/react";
import About from "./index";

// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = () => render(<About />);

describe("about page", () => {
    afterEach(cleanup);

    it("renders about page with a few required elements", async () => {
        const { getByText, getByAltText } = renderComponent();

        // check for existence of headers & main sections
        await waitForElement(() =>
            getByText(/The following is copy \/ pasted html from the rendered/i)
        );
        await waitForElement(() =>
            getByAltText(/netlify deployment status badge/i)
        );
        await waitForElement(() => getByAltText(/coveralls percentage badge/i));
        await waitForElement(() => getByText(/Campaign Dashboard/i));
        await waitForElement(() =>
            getByText(/How to filter campaigns in table:/i)
        );
        await waitForElement(() => getByText(/How to add a campaign/i));
        await waitForElement(() =>
            getByText(/Possible improvements \(for the future\)\.\.\./i)
        );
    });
});
