import React from 'react';
import { motion } from "framer";
import './OptionsPanel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faHandSparkles } from '@fortawesome/free-solid-svg-icons';

const animations = {
    initial: {
        y: -100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }, exit: {
        y: 50,
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
                <h2 className="contact-gradient">{props.option1.heading}</h2>
                <p>{props.option1.paragraph}</p>
            </div>
            <div className={`option-2${props.activeOption === '2' ? ' option-active' : ''}`} data-option="2" onClick={props.updateActiveOption}>
                <FontAwesomeIcon icon={faHandshake} className="icons" />
                <h2 className="contact-gradient">{props.option2.heading}</h2>
                <p>{props.option2.paragraph}</p>
            </div>
        </motion.div>
	)
}