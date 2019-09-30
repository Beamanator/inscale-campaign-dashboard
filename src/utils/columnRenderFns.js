import React from "react";
import moment from "moment";
import StatusIndicator from "../components/ui/StatusIndicator";

// creates new status indicator component
export const activeStatus = (isActive) => (
    <StatusIndicator isActive={isActive} />
);

// formats the budget into more human-readable format
export const budgetFormat = (num) => {
    // convert from string to number, if passed in as string
    if (typeof num === "string") num = parseInt(num, 10);

    // set up type of quantifiers
    // -> k = thousand
    // -> M = million
    // -> etc.
    const quantifiers = ["", "k", "M", "B", "T"];

    // now, try to figure out which quantifier index to use. start
    // -> with 0, meaning no quantifier needed
    let quantIndex = 0;

    // if number is in the next-highest 'thousands' category, move
    // -> to next quantifier
    while (Math.floor(num / 1000) > 0) {
        quantIndex++;
        num /= 1000;
    }

    // format & get final values
    let budget = num.toFixed(1);
    let quantifier = quantifiers[quantIndex];

    // output final formatted budget
    return `${budget}${quantifier} USD`;
};

// format date into nicer, human-readable format
export const dateFormat = (date) => {
    return moment(date, "MM/DD/YYYY").format("MMM Do, YYYY");
};
