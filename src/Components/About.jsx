import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <div className='aboutName'>
                <h1>ABOUT Surya WORK</h1>
                <div className='aboutGoal'>
                    <span></span>
                    <p>Our goal is to build products and services</p>
                    <span></span>
                </div>
            </div>
            <div className='workName'>
                <div>
                    <div className='imgDiv'><img src="https://img.icons8.com/material-outlined/24/12B886/laptop.png" /></div>
                    <h2>WEB DESIGN</h2>
                    <p>Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience</p>
                </div>
                <div>
                    <div className='imgDiv'><img src="https://img.icons8.com/ios-filled/50/12B886/source-code.png" /></div>
                    <h2>WEB DEVELOPMENT</h2>
                    <p>The web development process involves taking the graphical elements defined in the design process and coding them into a custom theme.</p>
                </div>
                <div>
                    <div className='imgDiv'><img src="https://img.icons8.com/external-outline-design-circle/66/12B886/external-Responsive-Web-seo-web-optimization-outline-design-circle.png" alt="external-Responsive-Web-seo-web-optimization-outline-design-circle"/></div>
                    <h2>RESPONSIVE WEB</h2>
                    <p>Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones):</p>
                </div>
                <div>
                    <div className='imgDiv'><img src="https://img.icons8.com/ios-filled/50/12B886/globe--v1.png" alt="globe--v1"/></div>
                    <h2>SOCIAL MEDIA</h2>
                    <p>It helps people stay connected and share ideas and opinions with others in a safe and secure environment. It can also be used to promote businesses as well as to stay informed about current events and trends.</p>
                </div>
            </div>
        </div>
    )
}

export default About
