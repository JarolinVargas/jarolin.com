import React from 'react';
import { motion } from "framer";
import './ItemBanner.scss';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

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
        <motion.div className="ItemBanner" initial="initial" animate="enter" exit="exit" variants={animations}>
            <Link to={props.url} onClick={() => props.switchPage('portfolio/luminal')}>
                <h2 className="primary-color">{props.title}</h2>
                <div className="banner-image" style={{backgroundImage: `url(${props.cover})`}}></div>
            </Link>
        </motion.div>
    )
}