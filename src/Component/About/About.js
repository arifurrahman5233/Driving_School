import React from 'react';

const About = () => {
    const activeStyle = {
        textAlign: "justify"
    }
    return (
        <div className="container bg-light my-3 rounded p-3">
            <h1 className="text-decoration-underline">About</h1>
            <p activeStyle={activeStyle} className="fst-italic"><strong>have been serving NYC with its 8 branches and completed 5k+ students in last 10 years. We have a team of experienced and certified trainers who will help you from the start to end of a driving lesson..</strong></p>
        </div>
    );
};

export default About;