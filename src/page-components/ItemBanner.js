import React from 'react';
import './ItemBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

export default function ItemBanner(props) {
    return (
        <Link to="/projects/luminal" className={`ItemBanner${props.fullHeight ? ' full-height' : ''}`} onClick={() => props.switchPage('projects/luminal')}>
            <span className="banner-image">
                <img src="#" alt="#"/>
            </span>
            <span className="banner-info">
                <h2>Luminal Website Builder</h2>
            </span>
        </Link>
    )
}