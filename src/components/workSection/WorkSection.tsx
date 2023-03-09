import React from 'react';
import "./WorkSection.scss";
import OjoCard from './OjoCard';
import RealSavvyCard from './RealSavvyCard';
import ChickenWaffleCard from './ChickenWaffleCard';

interface WorkSectionProps {
}

const WorkSection: React.FC<WorkSectionProps> = () => {

    return (
        <section className="mm-work">
            <div className="mm-work__title">
                <h2>Work</h2>
                <div className="mm-work__divider-x" />
            </div>
            <div className="mm-work__gallery">
                <OjoCard />
                <RealSavvyCard />
                <ChickenWaffleCard />
            </div>
        </section>
    );
};

export default WorkSection;
