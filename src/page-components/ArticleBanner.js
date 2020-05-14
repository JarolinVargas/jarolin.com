import React from 'react';
import './ArticleBanner.scss';

export default function ArticleBanner(props) {
    return (
        <a href="#" className="ArticleBanner" onClick={() => props.switchPage('thoughts/sdfs')}>
            <h2>This is the post title placeholder</h2>
            <ul className="article-meta">
                <li>July 24, 2020</li>
                <li>UI/UX Design</li>
            </ul>
        </a>
    )
}