import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import "./Background.css";

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
            {/*
            <section className="mm-container mm-container__skills">
                <h1>Ojo Labs</h1>
                <div className="mm-title__divider" />
                <Carousel className='mm-carousel'>
                    <ContentSlide />
                    <div className="mm-carousel-image">
                        <img src="./images/digs01.png" />
                    </div>
                    <div className="mm-carousel-image">
                        <img src="./assets/images/digs02.png" />
                    </div>
                    <div className="mm-carousel-image">
                        <img src="./assets/images/digs03.png" />
                    </div>
                </Carousel>
            </section>
            */}
        </div>
    );
};

export default Background;
