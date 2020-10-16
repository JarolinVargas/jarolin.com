import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer";
import './List.scss';

const animations = {
    initial: {
        y: -50,
        display: 'none',
        opacity: 0
    },
    enter: {
        y: 0,
        display: 'block',
        opacity: 1,
        transition: {
            ease: "easeOut"
        }
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
    let listItems;
    if( props.portfolioList ) {
        listItems = props.portfolioList.map((item, i) =>
            <motion.li key={i} variants={animations}>
                <Link to={`portfolio/${item.sys['id']}`}>{item.projectTitle}</Link>
            </motion.li>
        )
    }

    return (
        <motion.ul className="List" initial="initial" animate="enter" variants={staggerAnimation}>
            {listItems}
        </motion.ul>
    )
}
