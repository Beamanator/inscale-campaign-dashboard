import React, { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "Campaign Dashboard - About";
    }, []);

    return (
        <div>
            <article>
                <p>
                    The following is copy / pasted html from the rendered{" "}
                    <a
                        href="https://github.com/Beamanator/inscale-campaign-dashboard/blob/master/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        README.md
                    </a>{" "}
                    file, just so I'd have some content to put on this page :D
                </p>
                <h1>Campaign Dashboard</h1>
                <p>by The Beamanator</p>
                <h2>How to filter campaigns in table:</h2>
                <ol>
                    <li>Enter a valid start &amp; end date</li>
                    <li>Click 'filter'</li>
                </ol>
                <p>To remove filter and see old data, just click 'clear'</p>
                <p>
                    <strong>Note to interviewers</strong>: The exact conditions
                    in the prompt only mention:
                </p>
                <ul>
                    <li>
                        If the campaign has a startDate that is contained in the
                        range, it should show
                    </li>
                    <li>
                        If the campaign has an endDate that is contained in the
                        range, it should show.
                    </li>
                </ul>
                <p>
                    These two conditions don't cover the condition if some data
                    point has a start date <strong>before</strong> the range{" "}
                    <em>AND</em> an end date <strong>after</strong> the range. I
                    think it would make sense to show such data points (in a
                    real application), but I didn't include this condition in
                    this project because I wanted to follow the prompt as
                    closely as possible.
                </p>
                <h2>How to add a campaign</h2>
                <ol>
                    <li>Open the console</li>
                    <li>
                        Execute function <code>campaignAdd()</code>
                    </li>
                </ol>
                <p>
                    Here are the required arguments and formatting for params of{" "}
                    <code>campaignAdd</code>:
                </p>
                <ul>
                    <li>
                        <code>id</code> (<code>string</code>|<code>number</code>
                        )
                    </li>
                    <li>
                        <code>name</code> (<code>string</code>)
                    </li>
                    <li>
                        <code>startDate</code> (<code>Date</code>) - format:{" "}
                        <code>"MM/DD/YYYY"</code>
                    </li>
                    <li>
                        <code>endDate</code> (<code>Date</code>) - format:{" "}
                        <code>"MM/DD/YYYY"</code>
                    </li>
                    <li>
                        <code>budget</code> (<code>number</code>)
                    </li>
                </ul>
                <p>Additional requirements:</p>
                <ol>
                    <li>
                        <code>id</code> must be unique
                    </li>
                    <li>
                        <code>startDate</code> must come before{" "}
                        <code>endDate</code>
                    </li>
                </ol>
                <h2>Possible improvements (for the future)...</h2>
                <ol>
                    <li>
                        Allow different date formats in{" "}
                        <code>CustomDatePicker</code>
                    </li>
                    <li>
                        Allow different icon / different icon position in{" "}
                        <code>CustomDatePicker</code>
                    </li>
                    <li>
                        Allow <code>campaignAdd</code> to add multiple campaigns
                        at a time
                    </li>
                    <li>
                        Store / edit campaign sort order in{" "}
                        <code>localStorage</code>
                    </li>
                    <li>Format long snackbar errors in nicer way.</li>
                    <li>
                        Allow user to skip entering an <code>id</code>, and have
                        it auto-generate
                    </li>
                </ol>
            </article>
        </div>
    );
};

export default About;
