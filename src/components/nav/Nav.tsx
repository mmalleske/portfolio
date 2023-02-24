import React, { useRef, useEffect, useState } from 'react';
import "./Nav.css";

interface NavProps {
}

const Nav: React.FC<NavProps> = ({ }) => {

    return (
      <nav className="mm-nav">
          <div className="mm-nav__inner"></div>
      </nav>
    );
};

export default Nav;
