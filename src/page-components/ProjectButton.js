import React from 'react';
import { motion } from "framer";
import './ProjectButton.scss';

const animations = {
    initial: {
        scale: 0
    },
    enter: {
        scale: 1
    },
    exit: {
        scale: 0
    }
}

export default function ProjectButton(props) {
    return(
        <motion.div className="ProjectButton" initial="initial" animate="enter" exit="exit" variants={animations}>
            <a href={props.link} target="_blank">OPEN</a>
        </motion.div>
    )
}