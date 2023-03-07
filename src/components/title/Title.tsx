import React from 'react';
import Section from '../section/Section';
import Divider from '../divider/Divider';
import "./Title.scss";

interface TitleProps {
}

const Title: React.FC<TitleProps> = ({ }) => {

  return (
    <Section classNames='mm-title'>
      <h1 className="mm-title__name">Michael Malleske</h1>
      <Divider />
      <h1 className="mm-title__profession">Software Developer</h1>
    </Section>

  );
};

export default Title;
