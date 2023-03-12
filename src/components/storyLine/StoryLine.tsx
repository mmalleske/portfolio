import React from 'react';
import { Col, Row } from 'antd';
import LazyLoad from 'react-lazy-load';
import "./StoryLine.scss";

interface StoryLineProps {
    title?: string;
    items?: any;
}

export interface StoryLineItemProps {
    description: React.ReactNode;
    content: React.ReactNode;
}

const StoryLine: React.FC<StoryLineProps> = ({ items, title = "Ojo Labs" }) => {

    return (
        <div className="mm-storyline">
            <LazyLoad height={'100px'} width={'100%'} threshold={0.5}>
                <div className="mm-storyline__title">
                    <h2>{title}</h2>
                </div>
            </LazyLoad>
            {items && items.map((item: StoryLineItemProps, index: number) => (
                <LazyLoad height={'300px'} width={'100%'} threshold={0.5} key={`${title}-story-line-item-${index}`}>
                    {index % 2 === 0 ? (
                        <Row className="mm-storyline__item">
                            <Col span={12}>
                                <div className="mm-storyline__item__description">
                                    {item.description}
                                </div>
                            </Col>
                            <div className="mm-storyline__line">
                                {index > 0 && (<div className="top-line" />)}
                                <div className="circle" />
                                {(index !== items.length - 1) && (
                                    <>
                                        <div className="bottom-line" />
                                        <div className="bottom-line-mask" />
                                    </>
                                )}
                            </div>
                            <Col span={12}>
                                <div className="mm-storyline__item__content">
                                    {item.content}
                                </div>
                            </Col>
                        </Row>
                    ) : (
                        <Row className="mm-storyline__item">
                            <Col span={12}>
                                <div className="mm-storyline__item__content">
                                    {item.content}
                                </div>
                            </Col>
                            <div className="mm-storyline__line">
                                {index > 0 && (<div className="top-line" />)}
                                <div className="circle" />
                                {(index !== items.length - 1) && (
                                    <>
                                        <div className="bottom-line" />
                                        <div className="bottom-line-mask" />
                                    </>
                                )}
                            </div>
                            <Col span={12}>
                                <div className="mm-storyline__item__description">
                                    {item.description}
                                </div>
                            </Col>
                        </Row>
                    )}
                </LazyLoad>
            ))}            
        </div>
    );
};

export default StoryLine;
