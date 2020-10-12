import React, { useState } from 'react';
import { motion } from "framer";
import ReactGA from 'react-ga';
import OptionsPanel from '../components/OptionsPanel';
import Form from '../components/Form';
import '../components/Layouts.scss';

export default function Contact(props) {
	const [activeOption, setActiveOption] = useState(null);
	ReactGA.pageview(window.location.pathname);

	const updateActiveOption = (event) => {
		setActiveOption(event.currentTarget.getAttribute('data-option'))
	}

	return (
		<motion.div className="layouts layout-col-2 narrower-col-1 padding-off effects-off scroll-y" initial="initial" animate="enter" exit="exit" variants={layoutsStagger}>
			<div>
				<OptionsPanel
					activeOption={activeOption}
					updateActiveOption={updateActiveOption}
					option1={{
						heading: "Just Reaching Out",
						paragraph: "Reach out for any reason at all. I'm available weekdays and will respond to as quickly as possible."
					}}
					option2={{
						heading: "Let's Work Together",
						paragraph: "Tell me about your project and what you're looking for. From there, we can schedule a call or video chat to learn all the details."
					}}
				/>
			</div>
			<div>
				<div className="vertical-cols">
					<div className="form-container" style={{height: '100%'}}>
						{activeOption !== null ? <Form activeOption={activeOption}/> : ''}
					</div>
					<div style={{textAlign: 'right'}}>
						<a href="mailto:jarolinvargas@gmail.com" className="contact-mailto" target="_blank" rel="noopener noreferrer">JarolinVargas@gmail.com</a>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

const layoutsStagger = {
	enter: {
		transition: {
			staggerChildren: 0.1
		}
	},
	exit: {
		overflow: 'visible',
		transition: {
			staggerChildren: 0.1
		}
	}
}