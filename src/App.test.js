import React from "react";
import { BrowserRouter } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import { App } from "./App";

// @material-ui imports
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { createShallow } from "@material-ui/core/test-utils";

let shallow;

beforeEach(() => {
    shallow = createShallow();
});

afterEach(cleanup);

it("renders without crashing", () => {
    const theme = createMuiTheme();
    shallow(
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    );
});
