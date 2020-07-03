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
                <div>
                    <ul className="item-meta">
                        <li>{props.context}</li>
                        <li>{props.duration.split('-')[1].trim()}</li>
                    </ul>
                </div>
                <img src={props.cover} alt={props.title}/>
            </Link>
        </motion.div>
    )
}