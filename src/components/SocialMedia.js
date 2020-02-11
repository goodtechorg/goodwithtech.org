import React from "react"

const SocialMedia = ({github, linkedin, medium, twitter}) =>
    (
    <section className="text-center">
        <a href={'https://github.com/' + github}><i className="fab fa-github social-icon" aria-hidden="true"></i></a>
        <a href={'https://linkedin.com/' + linkedin}><i className="fab fa-linkedin social-icon" aria-hidden="true"></i></a>
        <a href={'https://www.medium.com/' + medium}><i className="fab fa-medium social-icon" aria-hidden="true"></i></a>
        <a href={'https://www.twitter.com/' + twitter}><i className="fab fa-twitter social-icon" aria-hidden="true"></i></a>
        <a href="rss.xml"><i className="fas fa-rss-square social-icon" aria-hidden="true"></i></a>
    </section>);

export default SocialMedia;
