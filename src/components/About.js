import React from 'react';
import '../styles/About.scss';

const About = () =>
    <div className="About">
        <div className="About-text">
            Hey! Thanks for using this example. If you like it, consider starring the repo :))
            <p>Or visit my website: <a href="http://samgarg.me">http://samgarg.me</a></p>
        </div>
        <div>
            <iframe
                src="https://ghbtns.com/github-btn.html?user=samgarg86&repo=react-trello&type=star&size=large"
                frameBorder="0"
                scrolling="0">
            </iframe>
        </div>
    </div>;


export default About;
