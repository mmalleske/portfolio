import React, { useRef, useEffect, useState } from 'react';
import "./SkillsSection.css";

interface SkillsSectionProps {
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ }) => {

    return (
      <section className="mm-section mm-skills">
          <h1 className="mm-animated-title">Skills + Proficiencies</h1>
          <div className="mm-title__divider" />
          <ul>
              <li>React/Redux/RTKQuery</li>
              <li>JavaScript/Typescript</li>
              <li>Php/Laravel</li>
              <li>Ruby/Rails</li>
              <li>Node.js/Ember.js</li>
              <li>C#</li>
          </ul>
          <ul>
              <li>SQL/MongoDB</li>
              <li>Docker</li>
              <li>Unity 3D/Unreal Engine</li>
              <li>Photoshop</li>
              <li>AWS</li>
              <li>Apache Airflow</li>
              <li>gRPC</li>
          </ul>
      </section>
    );
};

export default SkillsSection;
