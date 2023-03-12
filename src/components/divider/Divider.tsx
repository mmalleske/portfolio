import React from 'react';
import "./Divider.scss";

interface DividerProps {
    color?: string;
}

const Divider: React.FC<DividerProps> = ({color = "#383A43" }) => {
    return (
        <div style={{backgroundColor: color }} className="mm-divider" />
    );
};

export default Divider;
