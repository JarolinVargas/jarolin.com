import React from 'react';
import { motion } from "framer";
import './OptionsPanel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faHandSparkles } from '@fortawesome/free-solid-svg-icons';

const animations = {
    initial: {
        y: -200,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }, exit: {
        y: 200,
        opacity: 0,
        transition: {
            ease: 'easeOut'
        }
    }
}

export default function OptionsPanel(props) {
	return (
        <motion.div className="OptionsPanel" initial="initial" enter="enter" exit="exit" variants={animations}>
            <div className={`option-1${props.activeOption === '1' ? ' option-active' : ''}`} data-option="1" onClick={props.updateActiveOption}>
                <FontAwesomeIcon icon={faHandSparkles} className="icons" />
                <h2 className="contact-gradient">Just reaching out</h2>
                <p>Feel free to reach out for any reason at all. I'm down to help and give feedback on development and design related stuff.</p>
            </div>
            <div className={`option-2 disabled${props.activeOption === '2' ? ' option-active' : ''}`} data-option="2">
                <FontAwesomeIcon icon={faHandshake} className="icons" />
                <h2 className="contact-gradient">Let's work together</h2>
                <p>I'm currently available for freelance work. Reach out if you have a project you find me to be a good fit for.</p>
            </div>
        </motion.div>
	)
}