import React, { useState } from 'react';
import { Card, Modal, Carousel } from 'antd';
import YouTube from 'react-youtube';


interface ChickenWaffleCardProps {
}

const ChickenWaffleCard: React.FC<ChickenWaffleCardProps> = () => {

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
                cover={<img alt="example" src={require("../../assets/images/chickenwaffle.png")} />}
            >
                <Card.Meta title="Chicken Waffle Studios" />
            </Card>
            <Modal destroyOnClose title="Chicken Waffle Studios" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="mm-slide">
                    <div className="mm-slide__header">
                        <YouTube opts={opts} videoId="xA-w7bLQ6Dk" />
                    </div>
                    <div className="mm-slide__description">
                        <p>At <b>Chicken Waffle</b> I built XR games and apps using <b>C#</b> and the <b>Unity Engine.</b> Among my contributions were an AI chat bot, multiplayer features for <b>Baby Hands,</b> and a children's music game for which I also wrote the music and sound design. </p>
                    </div>
                </div>

            </Modal>

        </>
    );
};

export default ChickenWaffleCard;
