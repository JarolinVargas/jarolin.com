import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer";
import './Form.scss';

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
        y: 200,
        transition: {
            ease: 'easeOut'
        }
    }
}

export default function Form(props) {
    const [formSubmit, setFormSubmit] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'template_0SkNquXo', event.target, 'user_pCMJbFKNIBy3Z3bW7S0LX').then((result) => {
            setFormSubmit(true);
        }, (error) => {
            alert(error.text);
        });
    }

	return (
        <motion.form className="Form" initial="initial" enter="enter" exit="exit" variants={animations} onSubmit={handleSubmit}>
            <div>
                <div className="form-input-col">
                    <div className="form-input-container">
                        <label>Your Name <span className="contact-gradient">*</span></label>
                        <input type="text" name="from_name" required/>
                    </div>
                    <div className="form-input-container">
                        <label>Email address <span className="contact-gradient">*</span></label>
                        <input type="email" name="email_address" required/>
                    </div>
                </div>
                <motion.div className="form-input-col" initial={props.activeOption === '1' ? {height: 0, opacity: 0} : {height: 'auto', opacity: 1}} animate={props.activeOption === '2' ? {height: 'auto', opacity: 1, transition: {ease: 'easeOut'}} : {height: 0, opacity: 0}}>
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
                    <textarea name="message_html" required></textarea>
                </div>
            </div>
            <div style={{flexBasis: '100%'}}>
                <input type="submit" className="contact-form-submit-btn" value={formSubmit === true ? 'Message sent' : 'Submit Form'}/>
            </div>
        </motion.form>
	)
}