import React from 'react';
import { motion } from "framer";
import './ItemBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import placeholder from '../assets/writings-img/placeholder.jpg'

const animations = {
    initial: {
        height: 0
    },
    enter: {
        height: '100%'
    },
    exit: {
        height: 0
    }
}

export default function ItemBanner(props) {
    return (
        <motion.div className="ItemBanner" initial="initial" animate="enter" exit="exit" variants={animations} transition={{delay: props.animDelay}}>
            <Link to={props.url}>
                <div><span>ForceBrands</span></div>
                <div><h2 className="portfolio-gradient">{props.title}</h2></div>
                <div><span>July 24, 2020</span></div>
                <img src={props.cover} alt="sdfs"/>
            </Link>
        </motion.div>
    )
}