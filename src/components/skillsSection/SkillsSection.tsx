import React from 'react';
import Title from "../../components/title/Title";
import LazyLoad from 'react-lazy-load';
import StoryLine from '../../components/storyLine/StoryLine';
import YouTube from 'react-youtube';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { FaCode, FaWrench } from 'react-icons/fa';
import "./SkillsSection.scss";

interface SkillsItemProps {
    language: string;
    proficiency: number;
}

const SkillsItem: React.FC<SkillsItemProps> = ({ language, proficiency }) => {
    return (
        <div className="mm-skills-item">
            <div className="mm-skills-item__label">
                <span>{`${language}: `}</span>
            </div>
            <div className="mm-skills-item__progress-bar">
                <div style={{ width: `${proficiency}%` }} className="mm-skills-item__progress-bar__mask" >
                    <div className="mm-skills-item__progress-bar__mask__fill" />
                </div>
            </div>
        </div>
    )
}

function SkillsSection() {

    const windowWidth = useWindowWidth();

    const languageItems = [
        {
            language: "HTML/CSS",
            proficiency: 95
        },
        {
            language: "JavaScript",
            proficiency: 95
        },
        {
            language: "React/Typescript",
            proficiency: 90
        },
        {
            language: "Php/Laravel",
            proficiency: 70
        },
        {
            language: "Ruby/Rails",
            proficiency: 50
        },
        {
            language: "C#",
            proficiency: 60
        },
        {
            language: "Python",
            proficiency: 40
        },
    ];

    return (
        <div className="mm-skills-section-v2 mm-section">
            <div className="mm-skills-section-v2__languages">
                <LazyLoad height={150} width={'100%'} threshold={0.5}>
                    <div className="mm-skills-section-v2__subtitle">
                        <FaCode />
                        <h2>Languages</h2>
                        <div className="underline" />
                    </div>
                </LazyLoad>
                <LazyLoad height={300} width={'100%'} threshold={0.5}>
                    <div className="mm-skills-section-v2__languages__list">
                        {languageItems.map((item, index) => (
                            <SkillsItem key={`language-${index}`} proficiency={item.proficiency} language={item.language} />
                        ))}
                    </div>
                </LazyLoad>
            </div>
            <LazyLoad height={150} width={'100%'} threshold={0.5}>
                <div className="mm-skills-section-v2__subtitle">
                    <FaWrench />
                    <h2>Tools</h2>
                    <div className="underline" />
                </div>
            </LazyLoad>
            <LazyLoad height={"auto"} width={'100%'} threshold={0.5}>
                <div className="mm-work-section-v2__technologies">
                    <img alt="tech-icon" src={require("../../assets/images/rabbitmqlogo.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/dockerlogo.webp")} />
                    <img alt="tech-icon" src={require("../../assets/images/kubelogo.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/grpc-icon-color.png")} />                    
                    <img alt="tech-icon" src={require("../../assets/images/sqllogo.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/retool.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/aws-logo-square.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/photoshop.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/unitylogo.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/3dsmaxlogo.png")} />
                    <img alt="tech-icon" src={require("../../assets/images/AirflowLogo.png")} />
                </div>
            </LazyLoad>
        </div>
    );
}

export default SkillsSection;
