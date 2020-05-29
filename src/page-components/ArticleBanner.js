import React from 'react';
import './ArticleBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

export default function ArticleBanner(props) {
    return (
        <Link to="writings/sdof" className="ArticleBanner" onClick={() => props.switchPage('writings/sdfs')}>
            <h2 className="primary-color">This is the post title placeholder</h2>
            <em>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</em>
            <ul className="article-meta secondary-color">
                <li>July 24, 2020</li>
                <li>UI/UX Design</li>
            </ul>
        </Link>
    )
}