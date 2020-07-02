import React from 'react';
import { motion } from "framer";
import './ItemBanner.scss';
import { Link } from "react-router-dom";

export default function ItemBanner(props) {
    return (
        <motion.div className="ItemBanner">
            <Link to={props.url}>
                <div><span className="item-count">{props.count}</span></div>
                <div><h2 className="portfolio-gradient">{props.title}</h2></div>
                <div><span>{props.duration.split('-')[1].trim()} - {props.context}</span></div>
                <img src={props.cover} alt=""/>
            </Link>
        </motion.div>
    )
}