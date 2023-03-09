import React, { useState } from 'react';
import { Card, Modal, Carousel } from 'antd';

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
            <Modal  destroyOnClose title="Ojo Labs" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Carousel className="mm-slider">
                    <div className="mm-slide">
                        <div className="mm-slide__header">
                            <iframe width="455" height="210" src="https://www.youtube.com/embed/7otxRER8J1E" title="Ojo Homeowner Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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

export default RealSavvyCard;
