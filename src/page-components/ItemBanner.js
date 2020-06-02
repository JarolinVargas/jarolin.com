import React from 'react';
import './ItemBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

export default function ItemBanner(props) {
    return (
        <Link to={props.url} className="ItemBanner" onClick={() => props.switchPage('portfolio/luminal')}>
            <h2 className="primary-color">{props.title}</h2>
            <div className="banner-image" style={{backgroundImage: `url(${props.cover})`}}></div>
        </Link>
    )
}