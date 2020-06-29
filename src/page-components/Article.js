import React from 'react';
import { motion } from "framer";
import './Article.scss';

const animations = {
    initial: {
        opacity: 0,
        y: -200
    },
    enter: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 500,
        transition: {
            ease: 'easeOut'
        }
    }
}

export default function Article(props) {
    return (
        <motion.div className="article" initial="initial" animate="enter" exit="exit" variants={animations}>
            {props.children}
        </motion.div>
    )
}