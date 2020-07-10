import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer";
import './List.scss';

const animations = {
    initial: {
        y: -100,
        display: 'none',
        opacity: 0
    },
    enter: {
        y: 0,
        display: 'block',
        opacity: 1
    }
}

const staggerAnimation = {
	enter: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function List(props) {
    return (
        <motion.ul className="List" initial="initial" animate="enter" variants={staggerAnimation}>
            {props.children.map((item, i) => <motion.li key={i} variants={animations}><Link to={item.link}>{item.label}</Link></motion.li>)}
        </motion.ul>
    )
}
