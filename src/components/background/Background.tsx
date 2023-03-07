import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import "./Background.scss";

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
        <div>
            <div style={{ backgroundColor: `rgb(${bgColor}, 115, 126)` }} className="mm-background" >
                <figure className="sphere" />
            </div>
        </div>
    );
};

export default Background;
