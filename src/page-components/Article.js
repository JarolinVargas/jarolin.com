import React from 'react';
import { motion } from "framer";
import './Article.scss';

const animations = {
    initial: {
        height: 0
    },
    enter: {
        height: 'auto'
    },
    exit: {
        height: 0,
        opacity: 0
    }
}

export default function Article(props) {
    return (
        <motion.div className="article writings" initial="initial" animate="enter" exit="exit" variants={animations}>
            {props.children}
        </motion.div>
    )
}