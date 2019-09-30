import React, { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "Campaign Dashboard - About";
    }, []);

    return <div>About</div>;
};

export default About;
