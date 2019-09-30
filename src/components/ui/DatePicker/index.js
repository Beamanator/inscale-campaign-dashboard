import React, { useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";

// Date components
import { InputAdornment } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import EventIcon from "@material-ui/icons/Event";

// validation
import { TextValidator } from "react-material-ui-form-validator";

const CustomDatePicker = ({
    label,
    value,
    setDate,
    validators,
    errorMessages,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <DatePicker
            autoOk
            variant="dialog"
            open={open}
            onChange={(newDate) => {
                setDate(newDate);
                setOpen(false);
            }}
            value={value}
            TextFieldComponent={() => (
                <TextValidator
                    variant="outlined"
                    label={label}
                    value={moment(value).format("MMM Do, YYYY")}
                    onClick={() => setOpen(true)}
                    // won't ever be hit because dialog will
                    // -> set the date
                    // onChange={}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EventIcon />
                            </InputAdornment>
                        ),
                    }}
                    validators={validators}
                    errorMessages={errorMessages}
                />
            )}
            DialogProps={{
                onBackdropClick: () => setOpen(false),
                onEscapeKeyDown: () => setOpen(false),
            }}
            // hide cancel button in dialog since we don't need it
            cancelLabel=""
        />
    );
};

CustomDatePicker.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    setDate: PropTypes.func.isRequired,

    // optional:
    validators: PropTypes.array,
    errorMessages: PropTypes.array,
};

export default CustomDatePicker;
