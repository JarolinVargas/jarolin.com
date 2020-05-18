import React from 'react';
import './ItemBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

export default function ItemBanner(props) {
    return (
        <Link to="/projects/luminal" className="ItemBanner" onClick={() => props.switchPage('projects/luminal')}>
            <h2 className="primary-color">Luminal Website Builder</h2>
            <div className="banner-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/portfolio/luminal-site-builder.jpg)`}}></div>
        </Link>
    )
}