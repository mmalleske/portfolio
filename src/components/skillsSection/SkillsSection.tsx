import React, { useRef, useEffect, useState } from 'react';
import "./SkillsSection.scss";

interface SkillsSectionProps {
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ }) => {

    return (
        <section className="mm-skills">
            <div className="mm-skills__title">
                <h2>Skills</h2>
                <div className="mm-skills__divider-x" />
                <div className="mm-skills__divider-y" />
            </div>
            <div className="mm-skills__languages">
                <div className="mm-skills__subtitle">
                    <h3>Code</h3>
                </div>
                <ul>
                    <li>React/Redux/RTKQuery</li>
                    <li>JavaScript/Typescript</li>
                    <li>Php/Laravel</li>
                    <li>Ruby/Rails</li>
                    <li>Node.js/Ember.js</li>
                    <li>Python</li>
                    <li>C#</li>
                </ul>
            </div>
            <div className="mm-skills__tools">
                <div className="mm-skills__subtitle">
                    <h3>Tools</h3>
                </div>
                <ul>
                    <li>SQL/MongoDB</li>
                    <li>Docker</li>
                    <li>Unity 3D/Unreal Engine</li>
                    <li>Photoshop</li>
                    <li>AWS</li>
                    <li>Apache Airflow</li>
                    <li>gRPC</li>
                </ul>
            </div>

        </section>
    );
};

export default SkillsSection;
