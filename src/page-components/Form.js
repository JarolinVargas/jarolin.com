import React from 'react';
import { motion } from "framer";
import './Form.scss';

const animations = {
    initial: {
        opacity: 0,
        height: 0
    },
    enter: {
        opacity: 1,
        height: 'auto'
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            ease: 'easeOut'
        }
    }
}

export default function Form(props) {
	return (
        <motion.form className="Form" method="POST" initial="initial" enter="enter" exit="exit" variants={animations}>
            <div className="form-input-col">
                <div className="form-input-container">
                    <label>Your Name <span className="contact-gradient">*</span></label>
                    <input type="text" name="your_name"/>
                </div>
                <div className="form-input-container">
                    <label>Email address <span className="contact-gradient">*</span></label>
                    <input type="email" name="email_address"/>
                </div>
            </div>
            <motion.div className="form-input-col" initial={props.activeOption === '1' ? {height: 0, opacity: 0} : {height: 'auto', opacity: 1}} animate={props.activeOption === '2' ? {height: 'auto', opacity: 1} : {height: 0, opacity: 0}}>
                <div className="form-input-container">
                    <label>Services</label>
                    <input type="text" name="services" placeholder="Development, UI/UX Design, Product Design"/>
                </div>
                <div className="form-input-container">
                    <label>Budget</label>
                    <input type="text" name="budget"/>
                </div>
            </motion.div>
            <div className="form-input-container form-textarea">
                <label>{props.activeOption === '1' ? "What's up?" : 'Project details'} <span className="contact-gradient">*</span></label>
                <textarea name="message"></textarea>
            </div>
        </motion.form>
	)
}