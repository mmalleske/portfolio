import React from 'react';
import { GithubOutlined, LinkedinOutlined, MailFilled } from '@ant-design/icons';
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <div className="mm-footer">
                <a target="_blank" href="https://github.com/mmalleske" rel="noreferrer">
                    <GithubOutlined />
                </a>
                <a target="_blank" href="https://linkedin.com/in/mmalleske" rel="noreferrer">
                    <LinkedinOutlined />
                </a>
                <a target="_blank" href="mailto:mmalleske@gmail.com" rel="noreferrer">
                    <MailFilled />
                </a>
            </div>
        </>
    );
};

export default Footer;
