import React from 'react';
import Divider from '../divider/Divider';
import "./Title.scss";

interface TitleProps {
}

const Title: React.FC<TitleProps> = () => {

  const TitleV1 = () => (
    <div className="mm-title-v1">
      <h1 className="mm-title-v1__name">Michael Malleske</h1>
      <Divider />
      <h1 className="mm-title-v1__profession">Software Developer</h1>
    </div>
  )

  const TitleV2 = () => (
    <section className="mm-title-v2">
      <div className="mm-title-v2__name">
        <h1>Michael Malleske</h1>
      </div>
      <div className="mm-title-v2__profession">
        <h1>Software Developer</h1>
      </div>
    </section>
  )

  return TitleV2();
};

export default Title;
