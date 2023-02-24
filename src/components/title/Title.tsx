import React, { useRef, useEffect, useState } from 'react';
import "./Title.css";

interface TitleProps {
}

const Title: React.FC<TitleProps> = ({ }) => {

    return (
        <section className="mm-section mm-title">
          <h1 className="mm-title__name">Michael Malleske</h1>
          <div className="mm-title__divider" />
          <h1 className="mm-title__profession">Software Developer</h1>
        </section>
    );
};

export default Title;
