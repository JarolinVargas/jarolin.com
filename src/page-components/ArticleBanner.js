import React from 'react';
import './ArticleBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

export default function ArticleBanner(props) {
    return (
        <Link to="thoughts/sdof" className="ArticleBanner" onClick={() => props.switchPage('thoughts/sdfs')}>
            <h2 className="primary-color">This is the post title placeholder</h2>
            <ul className="article-meta">
                <li>July 24, 2020</li>
                <li>UI/UX Design</li>
            </ul>
        </Link>
    )
}