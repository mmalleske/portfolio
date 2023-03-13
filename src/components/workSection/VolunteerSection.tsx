import React from 'react';
import Title from "../../components/title/Title";
import LazyLoad from 'react-lazy-load';
import StoryLine from '../../components/storyLine/StoryLine';
import YouTube from 'react-youtube';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size'


import "./WorkSection.scss";


function VolunteerSection() {

    const items = [
        {
            description: <p>I was a volunteer code instructor <b>Code 2 College,</b> a program that provided programming courses and career support for underserved communities. One of my students became an intern at Ojo Labs and I had the opportunity to mentor him in a real work setting.</p>,
            content: <img alt='code-2-college' src={require('../../assets/images/code2college.jpeg')} />
        }
    ];

    return (
        <div className="mm-work-section-v2">
            <StoryLine title='Code 2 College' items={items} />
            <div className="mm-work-section-v2__bottom">
                <Button href="https://code2college.org/" target="_blank" type="primary" icon={<RightCircleOutlined />}>
                    Visit Site
                </Button>
            </div>            
        </div>
    );
}

export default VolunteerSection;
