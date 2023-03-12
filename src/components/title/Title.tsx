import React from 'react';
import Divider from '../divider/Divider';
import { DownCircleOutlined } from '@ant-design/icons';
import "./Title.scss";

interface TitleProps {
}

const Title: React.FC<TitleProps> = () => {

  const TitleV1 = () => (
    <div className="mm-title-v1">
      <div className="mm-title-v1__links">
        <div className="mm-title-v1__link">
          <p>Skills</p>
        </div>
        <div className="mm-title-v1__link">
          <p>Work</p>
        </div>
        <div className="mm-title-v1__link">
          <p>Volunteer</p>
        </div>
        <div className="mm-title-v1__link">
          <p>Personal</p>
        </div>
        <div className="mm-title-v1__link">
          <p>About</p>
        </div>
      </div>
      <div className="mm-title-v1__inner">
        <h1 className="mm-title-v1__name">Michael Malleske</h1>
        <Divider color='#fff' />
        <h1 className="mm-title-v1__profession">Software Developer</h1>
      </div>
      <div className='mm-breadcrumb'>
        <a href="#skills">
          <DownCircleOutlined style={{fontSize: "48px"}} />
        </a>
      </div>
    </div>
  )

  const TitleV2 = () => (
    <section className="mm-title-v2">
      <div className="mm-title-v2__name">
        <h1>Michael<br /> Malleske</h1>
      </div>
      <div className="mm-title-v2__profession">
        <h1>Software<br /> Developer</h1>
      </div>
    </section>
  )

  return TitleV1();
};

export default Title;
