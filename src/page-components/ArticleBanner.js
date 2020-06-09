import React from 'react';
import './ArticleBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

export default function ArticleBanner(props) {
    return (
        <Link to={props.url} className="ArticleBanner" onClick={() => props.switchPage('writings/sdfs')}>
            <h2 className="primary-color">{props.title}</h2>
            <em className="secondary-color">{props.summary}</em>
            <ul className="article-meta secondary-color">
                <li>{props.date}</li>
                <li>{props.category}</li>
            </ul>
        </Link>
    )
}