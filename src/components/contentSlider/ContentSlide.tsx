import React, { useRef, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import "./ContentSlide.scss";

interface ContentSlideProps {
  reverse?: boolean;
  image?: string;
  title?: string;
  body?: string;
}

const ContentSlide: React.FC<ContentSlideProps> = ({
  reverse = false,
  image = "../../assets/images/digs01.png",
  title = "Career",
  body = "Have automated tests that run when code is pushed. Deploy and test in a staging environment. Have a roll back plan. Use semantic versioning. 2. When querying a sql server database table, I am receiving duplicate records. How do I resolve this"
}) => {

  return (
    <Row className="mm-content-slide">
      {!reverse ? (
        <>
          <Col className="mm-content-slide__image" span={12}>
            <img alt="career" src={require('../../assets/images/digs01.png')} />
          </Col>
          <Col className="mm-content-slide__description" span={12}>
            <h1>{title}</h1>
            <p>{body}</p>
          </Col>
        </>
      ) : (
        <>
          <Col className="mm-content-slide__image" span={12}><img alt="career" src={require(image)} /></Col>
          <Col className="mm-content-slide__description" span={12}><h1>{title}</h1><p>{body}</p></Col>
        </>
      )}
    </Row>
  );
};

export default ContentSlide;
