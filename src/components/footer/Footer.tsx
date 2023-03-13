import React from 'react';
import { GithubOutlined, LinkedinOutlined, MailFilled } from '@ant-design/icons';
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <div className="mm-footer">
                <GithubOutlined />
                <LinkedinOutlined />
                <MailFilled />
            </div>
        </>
    );
};

export default Footer;
