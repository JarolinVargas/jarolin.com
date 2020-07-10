import React from 'react';
import { motion } from "framer";
import './IconLinks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

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
                <li><a href="https://dribbble.com/JarolinVargas" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDribbble} color="#EA4C89"/></a></li>
                <li><a href="https://github.com/JarolinVargas" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="#FFF"/></a></li>
                <li><a href="https://codepen.io/jarolinvargas" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCodepen} color="#FFF"/></a></li>
                <li><a href="https://www.linkedin.com/in/jarolin-vargas-04099b156/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} color="#028fc7"/></a></li>
                <li><a href="https://jarolin.com/Jarolin_Vargas_Front-End_Developer_UIUX_Designer.pdf" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt} color="#ffc107"/></a></li>
            </motion.ul>
        </div>
    )
}