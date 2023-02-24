import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import ContentSlide from "./ContentSlide";

interface BackgroundProps {
}

const Background: React.FC<BackgroundProps> = ({ }) => {

    const [bgColor, setBgColor] = useState(93);

    const handleUIEvent = (e: any) => {
        if (e.deltaY) {
            const newColor = bgColor + (e.deltaY / 4)
            setBgColor(newColor)
        }
    };

    return (
        <div onWheel={handleUIEvent}>
            <div style={{ backgroundColor: `rgb(${bgColor}, 115, 126)` }} className="mm-background" >
                <figure className="sphere" />
            </div>
            <nav className="mm-nav">
                <div className="mm-nav__inner"></div>
            </nav>
            <section className="mm-container mm-container__title">
                <div className="mm-title">
                    <h1 className="mm-title__name">Michael Malleske</h1>
                    <div className="mm-title__divider" />
                    <h1 className="mm-title__profession">Software Developer</h1>
                </div>
            </section>
            <section className="mm-container mm-container__skills">
                <h1>Skills + Proficiencies</h1>
                <div className="mm-title__divider" />
                <ul>
                    <li>React/Redux/RTKQuery</li>
                    <li>JavaScript/Typescript</li>
                    <li>Php/Laravel</li>
                    <li>Ruby/Rails</li>
                    <li>Node.js/Ember.js</li>
                    <li>C#</li>
                </ul>
                <ul>
                    <li>SQL/MongoDB</li>
                    <li>Docker</li>
                    <li>Unity 3D/Unreal Engine</li>
                    <li>Photoshop</li>
                    <li>AWS</li>
                    <li>Apache Airflow</li>
                    <li>gRPC</li>
                </ul>
            </section>
            <section className="mm-container mm-container__skills">
                <h1>Ojo Labs</h1>
                <div className="mm-title__divider" />
                <Carousel className='mm-carousel'>
                    <ContentSlide />
                    <div className="mm-carousel-image">
                        <img src="./assets/images/digs01.png" />
                    </div>
                    <div className="mm-carousel-image">
                        <img src="./assets/images/digs02.png" />
                    </div>
                    <div className="mm-carousel-image">
                        <img src="./assets/images/digs03.png" />
                    </div>
                </Carousel>
            </section>
        </div>
    );
};

export default Background;
