import React from "react";
import {GithubOutlined, InstagramOutlined, LinkedinFilled, WhatsAppOutlined } from '@ant-design/icons';

import './social-links.css';

export function SocialLinks(){
    
    return (
    <div>
        <div className='social-links'>
            <p>Me Siga</p>
            <div className='vertical-divisor-social-links'></div>
            <a href='https://www.instagram.com/eduardoesnc/' target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a>
            <a href='https://github.com/eduardoesnc' target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
            <a href='https://www.linkedin.com/in/eduardoesnc/' target="_blank" rel="noopener noreferrer"><LinkedinFilled /></a>
            <a href='https://wa.me/+5581997688104' target="_blank" rel="noopener noreferrer"><WhatsAppOutlined /></a>
        </div>
    </div>
    );
}