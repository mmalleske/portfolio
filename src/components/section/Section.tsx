import React, { PropsWithChildren } from 'react';
import "./Section.scss";

interface SectionProps {
  classNames?: string;
}

const Section: React.FC<PropsWithChildren<SectionProps>> = ({classNames, ...props}) => {

  return (
    <div className={`mm-section ${classNames || ""}`}>
      <div className="mm-section__inner">
        {props.children}
      </div>
    </div>
  );
};

export default Section;
