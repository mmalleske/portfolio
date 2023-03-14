import React from 'react';
import { Col, Row } from 'antd';
import LazyLoad from 'react-lazy-load';
import Divider from '../divider/Divider';
import { useWindowWidth } from '@react-hook/window-size';
import "./StoryLine.scss";

interface StoryLineProps {
    title?: string;
    items?: any;
    id?: string;
}

export interface StoryLineItemProps {
    description: React.ReactNode;
    content: React.ReactNode;
}

const StoryLine: React.FC<StoryLineProps> = ({ items, id, title = "Ojo Labs" }) => {

    const windowWidth = useWindowWidth();

    return (
        <div id={id} className="mm-storyline">
            <LazyLoad height={'52px'} width={'100%'} threshold={0.5}>
                <div className="mm-storyline__title">
                    <div className="mm-storyline__title__inner">
                        <h2>{title}</h2>                        
                    </div>
                    <Divider />
                </div>
            </LazyLoad>
            {items && items.map((item: StoryLineItemProps, index: number) => (
                <LazyLoad height={"auto"} width={'100%'} threshold={0.25} key={`${title}-story-line-item-${index}`}>
                    {windowWidth > 968 && index % 2 === 0 ? (
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
