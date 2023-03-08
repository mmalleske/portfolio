import React, { useState } from 'react';
import "./WorkSection.scss";
import { Card, Modal } from 'antd';

interface WorkSectionProps {
}

const WorkSection: React.FC<WorkSectionProps> = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContentsIndex, setModalContentsIndex] = useState(0);

    const modalContents = [
        {
            title: "Ojo Labs"
        },
        {
            title: "Real Savvy"
        },
        {
            title: "Chicken Waffle"
        }
    ];

    const showModal = (modalIndex: number) => {
        setModalContentsIndex(modalIndex);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="mm-work">
            <div className="mm-work__title">
                <h2>Work</h2>
                <div className="mm-work__divider-x" />
            </div>
            <div className="mm-work__gallery">
                <Card
                    onClick={() => showModal(0)}
                    className="mm-work__gallery__card"
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={require("../../assets/images/ojo.png")} />}
                >
                    <Card.Meta title="Ojo Labs" description={<a target="_blank" href="www.homeowner.ojo.com">Visit</a>} />

                </Card>
                <Card
                    onClick={() => showModal(1)}
                    className="mm-work__gallery__card"
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={require("../../assets/images/realsavvy.png")} />}
                >
                    <Card.Meta title="Real Savvy" description={<a href="www.realsavvy.com" target="_blank"> Visit</a>} />
                </Card>
                <Card
                    onClick={() => showModal(2)}
                    className="mm-work__gallery__card"
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={require("../../assets/images/chickenwaffle.png")} />}
                >
                    <Card.Meta title="Chicken Waffle Studios" description={<a target="_blank" href="www.chickenwaffle.com">Visit</a>} />
                </Card>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>{modalContents[modalContentsIndex].title}</p>
                </Modal>
            </div>
        </section>
    );
};

export default WorkSection;
