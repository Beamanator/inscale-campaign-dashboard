import { activeStatus, budgetFormat, dateFormat } from "./columnRenderFns";

export const columns = [
    {
        name: "id",
        options: {
            display: false,
        },
    },
    { name: "name", label: "Campaign Name" },
    {
        name: "startDate",
        label: "Start Date",
        options: {
            customBodyRender: dateFormat,
        },
    },
    {
        name: "endDate",
        label: "End Date",
        options: {
            customBodyRender: dateFormat,
        },
    },
    {
        name: "active",
        label: "Active?",
        options: {
            customBodyRender: activeStatus,
        },
    },
    {
        name: "budget",
        label: "Budget",
        options: {
            customBodyRender: budgetFormat,
        },
    },
];
