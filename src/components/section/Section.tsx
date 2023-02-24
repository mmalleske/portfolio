import React, { useRef, useEffect, useState } from 'react';
import "./Section.css";

interface SectionProps {
  className?: string;
  props: any;
}

const Section: React.FC<SectionProps> = ({ className, props}) => {


    return (
        <div className={`mm-section ${className}`}>
          {props.children}
        </div>
    );
};

export default Section;
