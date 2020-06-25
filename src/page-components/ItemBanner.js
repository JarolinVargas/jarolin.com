import React from 'react';
import { motion } from "framer";
import './ItemBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import placeholder from '../assets/writings-img/placeholder.jpg'

export default function ItemBanner(props) {
    return (
        <div className="ItemBanner">
            <Link to={props.url}>
                <div style={{height: 0}}></div>
                <div><h2 className="portfolio-gradient">{props.title}</h2></div>
                <div><span>July 24, 2020 - ForceBrands</span></div>
                <img src={props.cover} alt=""/>
            </Link>
        </div>
    )
}