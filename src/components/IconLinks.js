import React from 'react';
import { motion } from "framer";
import './IconLinks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const animations = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: -50,
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
                <li><a href="https://github.com/JarolinVargas" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="#FFF" /></a></li>
                <li><a href="https://dribbble.com/JarolinVargas" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDribbble} color="#EA4C89" /></a></li>
                <li><a href="https://www.linkedin.com/in/jarolin-vargas-04099b156/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} color="#028fc7" /></a></li>
                <li><a href="resume.pdf" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} color="orange" /></a></li>
            </motion.ul>
        </div>
    )
}
