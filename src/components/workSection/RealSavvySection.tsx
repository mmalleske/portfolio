import React from 'react';
import LazyLoad from 'react-lazy-load';
import StoryLine from '../../components/storyLine/StoryLine';
import YouTube from 'react-youtube';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size'


import "./WorkSection.scss";


function RealSavvySection() {


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

    const realSavvyItems = [
        {
            description: <p>At <b>RealSavvy</b> I was a fullstack developer on our application suite for real estate professionals, which included a CMS, CRM and IDX search portal.  Our primary tech stack was <b>React and Ember.js</b> frontend and <b>Ruby on Rails</b> backend.</p>,
            content: <img alt="real-savvy-demo" src={require("../../assets/images/rspromo.png")} />
        },
        {
            description: <p>During my time at Real Savvy I lead the build out of our CMS lovingly known as 'the Builder'. This website editor allowed agents and brokerages to build custom sites for their brand. Each site was hooked into an MLS feed so users could easily serve listing data and display it beautifully on their site.</p>,
            content:<YouTube className='mm-yt' opts={youtubeOptions} videoId="LY8NafLcvy8" />
        },
        {
            description: <p>I also built features and provided support for our IDX, a listing search portal that allowed users to easily search in a specific area with a robust filter set. Users were also able to save their searches and collaborate in realtime with their agent via this portal.</p>,
            content: <img  alt="real-savvy-demo" src={require("../../assets/images/idx.png")} />
        },
        {
            description: <p>We had the pleasure to work with some of real estate's most well known brokerages including Hollywood's <b>The Agency.</b> For these clients we built a white glove version of our CMS and developed custom integrations to fit their needs and easily migrate their existing data.</p>,
            content: <img alt="real-savvy-demo" src={require("../../assets/images/agencypromo.png")} />
        }
    ];

    return (
        <div className="mm-section mm-work-section-v2">
            <StoryLine title='RealSavvy' items={realSavvyItems} />
            <div className="mm-work-section-v2__bottom">
                <Button href="https://realsavvy.com" target="_blank" type="primary" icon={<RightCircleOutlined />}>
                    Visit Site
                </Button>
            </div>
            <LazyLoad height={'auto'} width={'100%'} threshold={0.5}>
                <div className="mm-work-section-v2__technologies">
                    <img alt="tech-icon" src={require("../../assets/images/reactlogo.jpeg")} />
                    <img alt="tech-icon" src={require("../../assets/images/railslogo.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/photoshop.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/ember.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/aws-logo-square.png")} />
                </div>
            </LazyLoad>
        </div>
    );
}

export default RealSavvySection;
