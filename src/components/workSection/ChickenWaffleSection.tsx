import React from 'react';
import Title from "../../components/title/Title";
import LazyLoad from 'react-lazy-load';
import StoryLine from '../../components/storyLine/StoryLine';
import YouTube from 'react-youtube';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size'


import "./WorkSection.scss";


function ChickenWaffleSection() {


    const windowWidth = useWindowWidth();

    const youtubeOptions = {
        height: windowWidth > 968 ? '240' : '200',
        width: windowWidth > 968 ? '450' : '320',
        playerVars: {
            autoplay: 0,
            defer: true,
            loading: "lazy",
            async: true
        },
    };

    const items = [
        {
            description: <p>At <b>Chicken Waffle</b> I built XR games and apps using <b>C#</b> and the <b>Unity Engine.</b> Among my contributions were an AI chat bot, multiplayer features for <b>Baby Hands,</b> and a children's music game for which I also wrote the music and sound design. </p>,
            content: <YouTube className="mm-yt" opts={youtubeOptions} videoId="xA-w7bLQ6Dk" />
        }
    ];

    return (
        <div className="mm-work-section-v2">
            <StoryLine title='Chicken Waffle' items={items} />
            <div className="mm-work-section-v2__bottom">
                <Button href="https://chickenwaffle.com" target="_blank" type="primary" icon={<RightCircleOutlined />}>
                    Visit Site
                </Button>
            </div>
            <LazyLoad height={windowWidth > 968 ? '300px' : '480px'} width={'100%'} threshold={0.5}>
                <div className="mm-work-section-v2__technologies">
                    <img alt="tech-icon" src={require("../../assets/images/unitylogo.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/photoshop.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/3dsmaxlogo.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/csharp.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/reason.png")} />
                </div>
            </LazyLoad>
        </div>
    );
}

export default ChickenWaffleSection;
