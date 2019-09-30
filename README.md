# Campaign List

by The Beamanator

## How to filter campaigns in table:

1. Enter a valid start & end date
2. Click 'filter'

To remove filter and see old data, just click 'clear'

**Note to interviewers**: The exact conditions in the prompt only mention:
- If the campaign has a startDate that is contained in the range, it should show
- If the campaign has an endDate that is contained in the range, it should show.

These two conditions don't cover the condition if some data point has a start date **before** the range _AND_ an end date **after** the range. I think it would make sense to show such data points (in a real application), but I didn't include this condition in this project because I wanted to follow the prompt as closely as possible.

## How to add a campaign

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
