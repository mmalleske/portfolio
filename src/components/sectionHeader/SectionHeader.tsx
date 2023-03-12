import React from 'react';
import "./SectionHeader.scss";
import Divider from '../divider/Divider';
import LazyLoad from 'react-lazy-load';
import { useWindowWidth } from '@react-hook/window-size';

interface SectionHeaderProps {
    id: string;
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title = "Skills" }) => {
    const windowWidth = useWindowWidth();

    return (
        <div id={id} className="section-header">
            <LazyLoad height={windowWidth > 968 ? '170px' : '52'} width={'100%'} threshold={0.5}>
                <>
                    <div className="section-header__inner">
                        <h1>{title}</h1>
                    </div>
                    <Divider color='#F9C784' />
                </>
            </LazyLoad>
        </div>
    );
};

export default SectionHeader;
