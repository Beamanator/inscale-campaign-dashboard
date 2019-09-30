import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import App from "./App";

// redux imports
import { Provider } from "react-redux";
import store from "./store";

// pick a date util library
import MomentUtils from "@date-io/moment";

const theme = createMuiTheme();

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <App />
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
