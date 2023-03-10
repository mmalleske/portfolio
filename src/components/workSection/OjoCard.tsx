import React, { useState } from 'react';
import { Card, Modal, Carousel } from 'antd';
import YouTube from 'react-youtube';

interface OjoCardProps {
}

const OjoCard: React.FC<OjoCardProps> = () => {

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
                cover={<img alt="example" src={require("../../assets/images/ojo.png")} />}
            >
                <Card.Meta title="Ojo Labs" />
            </Card>
            <Modal destroyOnClose title="Ojo Labs" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Carousel className="mm-slider">
                    <div className="mm-slide">
                        <div className="mm-slide__header">
                            <YouTube opts={opts} videoId="7otxRER8J1E" />
                        </div>
                        <div className="mm-slide__description">
                            <p>At <b>Ojo Labs</b> I was a fullstack developer on our <b>Homeowner</b> product - a tool to help users track their home's value, manage home maintenance and find local service providers. Our primary tech stack was <b>React/Typescript</b> frontend and <b>Php/Laravel</b> backend.</p>
                        </div>
                    </div>
                    <div className="mm-slide">
                        <div className="mm-slide__header">
                            <img width="455" alt="ojo-demo" src={require("../../assets/images/digs01-2.png")} />
                        </div>
                        <div className="mm-slide__description">
                            <p>Among the many contributions I made during my time at Ojo was the <b>Announcement Engine</b> - a service that gathered data points based on the current market as well as the individual user to deliver personalized and meaningful notifications to our consumers.</p>
                        </div>
                    </div>
                    <div className="mm-slide">
                        <div className="mm-slide__header">
                            <img width="455" alt="ojo-demo" src={require("../../assets/images/digs-maintenance-checklist.png")} />
                        </div>
                        <div className="mm-slide__description">
                            <p>I also helped build our <b>Maintenance Checklist</b> feature, which integrates with <b>Thumbtack</b> to provide realtime maintenance suggestions specific to your home and local provider recommendations.</p>
                        </div>
                    </div>
                    <div className="mm-slide">
                        <div className="mm-slide__header">
                            <img width="455" alt="ojo-demo" src={require("../../assets/images/digs-et.jpg")} />
                        </div>
                        <div className="mm-slide__description">
                            <p>Outside of the Homeowner app, I also built internal tools to integrate my team's application into the greater Ojo ecosystem. One of these tools utilized RabbitMQ to listen to user interactions with our agents, or "events", and sent out automated invites to our platform. The event system also allowed us to gather insightful analytics.</p>
                        </div>
                    </div>
                </Carousel>
            </Modal>

        </>
    );
};

export default OjoCard;
