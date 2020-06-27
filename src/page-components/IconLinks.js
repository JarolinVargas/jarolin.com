import React from 'react';
import { motion } from "framer";
import './IconLinks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const animations = {
    initial: {
        x: 400,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: -400,
        opacity: 0,
        transition: {
            ease: 'easeOut'
        }
    }
}

export default function IconLinks() {
    return (
        <div className="IconLinks">
            <motion.ul variants={animations}>
                <li><a href="#"><FontAwesomeIcon icon={faDribbble} color="#EA4C89"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faGithub} color="#FFF"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCodepen} color="#FFF"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} color="#0274B3"/></a></li>
            </motion.ul>
        </div>
    )
}