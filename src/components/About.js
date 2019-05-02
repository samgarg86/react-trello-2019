import React from 'react';
import '../styles/About.scss';

const About = () =>
    <div className="about">
        <div className="about__text">
            Hey! Thanks for using this example. If you like it, consider starring the repo :))
            <p>Or visit my website: <a href="http://samgarg.me">http://samgarg.me</a></p>
        </div>
        <div className="about__star-repo">
            <iframe
                src="https://ghbtns.com/github-btn.html?user=samgarg86&repo=react-trello&type=star&size=large"
                frameBorder="0"
                scrolling="0">
            </iframe>
        </div>
    </div>;


export default About;
