import React, { useState } from 'react';
import { Card, Modal, Carousel } from 'antd';
import YouTube from 'react-youtube';


interface RealSavvyCardProps {
}

const RealSavvyCard: React.FC<RealSavvyCardProps> = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const opts = {
        height: '210',
        width: '455',
        playerVars: {
            autoplay: 0,
            defer: true,
            loading: "lazy",
            async: true
        },
    };

    return (
        <>
            <Card
                onClick={showModal}
                className="mm-work__gallery__card"
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={require("../../assets/images/realsavvy.png")} />}
            >
                <Card.Meta title="Real Savvy" />
            </Card>
            <Modal destroyOnClose title="Real Savvy" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Carousel className="mm-slider">
                    <div className="mm-slide">
                        <div className="mm-slide__header">
                        <img width="455" alt="ojo-demo" src={require("../../assets/images/rspromo.png")} />
                        </div>
                        <div className="mm-slide__description">
                            <p>At <b>RealSavvy</b> I was a fullstack developer on our application suite for real estate professionals, which included a CMS, CRM and IDX search portal.  Our primary tech stack was <b>React and Ember.js</b> frontend and <b>Ruby on Rails</b> backend.</p>
                        </div>
                    </div>
                    <div className="mm-slide">
                        <div className="mm-slide__header">
                            <YouTube opts={opts} videoId="LY8NafLcvy8" />
                        </div>
                        <div className="mm-slide__description">
                            <p>During my time at Real Savvy I lead the build out of our CMS lovingly known as 'the Builder'. This website editor allowed agents and brokerages to build custom sites for their brand. Each site was hooked into an MLS feed so users could easily serve listing data and display it beautifully on their site.</p>
                        </div>
                    </div>
                    <div className="mm-slide">
                        <div className="mm-slide__header">
                            <img width="455" alt="ojo-demo" src={require("../../assets/images/idx.png")} />
                        </div>
                        <div className="mm-slide__description">
                            <p>I also built features and provided support for our IDX, a listing search portal that allowed users to easily search in a specific area with a robust filter set. Users were also able to save their searches and collaborate in realtime with their agent via this portal.</p>
                        </div>
                    </div>
                    <div className="mm-slide">
                        <div className="mm-slide__header">
                            <img width="455" alt="ojo-demo" src={require("../../assets/images/agencypromo.png")} />
                        </div>
                        <div className="mm-slide__description">
                            <p>We had the pleasure to work with some of real estate's most well known brokerages including Hollywood's <b>The Agency.</b> For these clients we built a white glove version of our CMS and developed custom integrations to fit their needs and easily migrate their existing data.</p>
                        </div>
                    </div>                    
                </Carousel>
            </Modal>

        </>
    );
};

export default RealSavvyCard;
