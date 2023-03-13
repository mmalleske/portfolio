import React from 'react';
import Title from "../../components/title/Title";
import LazyLoad from 'react-lazy-load';
import StoryLine from '../../components/storyLine/StoryLine';
import YouTube from 'react-youtube';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size'


import "./WorkSection.scss";


function PersonalSection() {


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
            description: <p><b>Harbinger</b> Sky is a VR game I created under my LLC <b>Tin Soldier Games,</b> built with a focus on inclusion and accessibility. My nephew has spinal muscular atrophy, and is unable to perform many of the functions of recent VR games, so I was inspired to create something that anyone could play. I worked closely with him to develop a control scheme that was simple and easy to use without the need of expensive peripherals, yet still providing exciting gameplay.</p>,
            content: <YouTube className="mm-yt" opts={youtubeOptions} videoId="IrJi0BzvYJc" />
        }
    ];

    return (
        <div className="mm-work-section-v2">
            <StoryLine title='Harbinger Sky' items={items} />
            <div className="mm-work-section-v2__bottom">
                <Button href="http://tinsoldiergames.com" target="_blank" type="primary" icon={<RightCircleOutlined />}>
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

export default PersonalSection;