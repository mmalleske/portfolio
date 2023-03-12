import React from 'react';
import "./Divider.scss";

interface DividerProps {
    color?: string;
}

const Divider: React.FC<DividerProps> = ({color = "#696D7D" }) => {
    return (
        <div style={{backgroundColor: color }} className="mm-divider" />
    );
};

export default Divider;
