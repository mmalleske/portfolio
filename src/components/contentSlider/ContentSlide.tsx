import React, { useRef, useEffect, useState } from 'react';
import { Col, Row } from 'antd';

interface ContentSlideProps {
  reverse?: boolean;
}

const ContentSlide: React.FC<ContentSlideProps> = ({ reverse = false }) => {


    return (
        <Row className="mm-content-slide">
          <Col className="mm-content-slide__image" span={12}>Image</Col>
          <Col className="mm-content-slide__description" span={12}>Content</Col>
        </Row>
    );
};

export default ContentSlide;
