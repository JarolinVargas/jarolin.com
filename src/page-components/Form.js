import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer";
import './Form.scss';

const animations = {
    initial: {
        opacity: 0,
        height: '0%'
    },
    enter: {
        opacity: 1,
        height: '100%'
    },
    exit: {
        opacity: 0,
        height: '0%',
        transition: {
            ease: 'easeOut'
        }
    }
}

export default function Form(props) {
    const formRef = useRef(null);
    const [emailSent, setEmailSent] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'template_0SkNquXo', event.target, 'user_pCMJbFKNIBy3Z3bW7S0LX').then((result) => {
            setEmailSent(true);
            alert('Your message was sent sucessfully');
        }, (error) => {
            alert(error.text);
        });
    }

    if( props.submit === true && emailSent === false && formRef.current.reportValidity() ) {
        formRef.current.querySelector('.contact-form-submit-btn').click();
    }

	return (
        <motion.form ref={formRef} className="Form" initial="initial" enter="enter" exit="exit" variants={animations} onSubmit={handleSubmit}>
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
                    <textarea name="message_html" required></textarea>
                </div>
            </div>
            <div style={{flexBasis: '100%'}}>
                <input type="submit" className="contact-form-submit-btn contact-gradient" value={props.activeOption === null ? 'Select an Option' : 'Submit Form'}/>
            </div>
        </motion.form>
	)
}