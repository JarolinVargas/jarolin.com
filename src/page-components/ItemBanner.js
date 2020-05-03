import React from 'react';
import './ItemBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

export default function ItemBanner(props) {
    return (
        <Link to="/projects/luminal" className="ItemBanner" onClick={() => props.switchPage('projects/luminal')}>
            
        </Link>
    )
}