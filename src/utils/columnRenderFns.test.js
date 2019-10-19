import { render, cleanup } from "@testing-library/react";
import { activeStatus, budgetFormat, dateFormat } from "./columnRenderFns";

describe("utils", () => {
    afterEach(cleanup);

    // activeStatus tests
    it("renders correct (False) status", () => {
        const { getByTestId } = render(activeStatus(false));
        const activeStatusText = getByTestId("status-text").textContent;
        expect(activeStatusText).toMatch(/^inactive$/i);
    });
    it("renders correct (True) status", () => {
        const { getByTestId } = render(activeStatus(true));
        const activeStatusText = getByTestId("status-text").textContent;
        expect(activeStatusText).toMatch(/^active$/i);
    });

    // --> budgetFormat test
    it("formats budget into human-readable format", () => {
        // basic formatting procedures
        expect(budgetFormat(123)).toMatch("123.0 USD");
        expect(budgetFormat(123456)).toMatch("123.5k USD"); // Note: rounding!
        expect(budgetFormat(123456789)).toMatch("123.5M USD"); // Note: rounding!
        expect(budgetFormat(111222333444)).toMatch("111.2B USD");
        expect(budgetFormat(111222333444555)).toMatch("111.2T USD");

        // handle budget with decimal places
        expect(budgetFormat(12345.67)).toMatch("12.3k USD");
        // handle budget from string
        expect(budgetFormat("1234.56")).toMatch("1.2k USD");

        // handle invalid budgets
        expect(budgetFormat("Hello my budget is 123")).toMatch(
            "Invalid budget"
        );
        expect(budgetFormat(["123", "456"])).toMatch("Invalid budget");
        expect(budgetFormat(111222333444555666)).toMatch("Budget too large");
    });

    // --> dateFormat test
    it("formats ugly date into human-readable format", () => {
        expect(dateFormat("3/21/1992")).toMatch("Mar 21st, 1992");
        expect(dateFormat("9/1/2000")).toMatch("Sep 1st, 2000");

        // human-readable invalid date text
        expect(dateFormat("13/1/1999")).toMatch("Invalid date");
    });
});
