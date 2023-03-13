import React from 'react';
import LazyLoad from 'react-lazy-load';
import "./AboutSection.scss";

const AboutSection = () => {
    return (
        <LazyLoad height={"100vh"} threshold={0.3}>
            <div className="about">
                <div className="about__bars about__bars-top">
                    <div className="about__bars__bar" />
                    <div className="about__bars__bar" />
                    <div className="about__bars__bar" />
                    <div className="about__bars__bar" />
                    <div className="about__bars__bar" />
                </div>
                <div className="about__top-line" />
                <div className='about__avatar'>
                    <img alt="avatar" src={require('../../assets/images/about.jpeg')} />
                </div>
                <div className="about__middle-line" />
                <div className='about__bio'>
                    <p>
                        Howdy! I’m a full stack developer, shipping enterprise level software and games since 2017. Outside of coding, I am a musician and producer, having played hundreds of shows and releasing four EPs, as well as a former teacher, so I have an interest in music and ed tech.  In my downtime I enjoy surfing, camping, and hanging with my pup Marley. Feel free to reach out to me or check out my code with the links below, and let’s build something together! <br></br><br></br>Cheers! <br></br><br></br> -Mike Malleske
                    </p>
                </div>
                <div className="about__bars about__bars-bottom">
                    <div className="about__bars__bar" />
                    <div className="about__bars__bar" />
                    <div className="about__bars__bar" />
                    <div className="about__bars__bar" />
                    <div className="about__bars__bar" />
                </div>
            </div>
        </LazyLoad>
    );
};

export default AboutSection;
