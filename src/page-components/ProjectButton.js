import React from 'react';
import { motion } from "framer";
import './ProjectButton.scss';

const animations = {
    initial: {
        y: -200,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .10
        }
    },
    exit: {
        y: 500,
        opacity: 0,
        transition: {
            ease: 'easeOut',
            delay: .10
        }
    }
}

export default function ProjectButton(props) {
    return(
        <div className="ProjectButton">
            <a href={props.link} target="_blank">OPEN</a>
        </div>
    )
}