import React, { useRef, useEffect, useState } from 'react';
import { Col, Row } from 'antd';

interface ContentSlideProps {
  reverse?: boolean;
}

const ContentSlide: React.FC<ContentSlideProps> = ({ reverse = false }) => {


    return (
        <Row>
          <Col span={12}>Image</Col>
          <Col span={12}>Content</Col>
        </Row>
    );
};

export default ContentSlide;
