# Campaign List

by The Beamanator

## How to add campaign(s)

1. Open the console
2. Execute function `campaignAdd()`

Here are the required arguments and formatting for params of `campaignAdd`:

-   `id` (`string`|`number`)
-   `name` (`string`)
-   `startDate` (`Date`) - format: `"MM/DD/YYYY"`
-   `endDate` (`Date`) - format: `"MM/DD/YYYY"`
-   `budget` (`number`)

Additional requirements:

1. `id` must be unique
1. `startDate` must come before `endDate`

## Possible improvements (for the future)...

1. Allow different date formats in `CustomDatePicker`
1. Allow different icon / different icon position in `CustomDatePicker`
1. Allow `campaignAdd` to add multiple campaigns at a time
1. Store / edit campaign sort order in `localStorage`
1. Format long snackbar errors in nicer way.
1. Allow user to skip entering an `id`, and have it auto-generate
