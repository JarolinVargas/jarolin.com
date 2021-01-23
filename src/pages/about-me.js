import React from 'react';
import { motion } from "framer";
import ReactGA from 'react-ga';
import MyIntro from '../components/MyIntro';
import Background, { GridDots } from '../components/Background';
import JarolinVargas from '../assets/jarolin-vargas.svg';
import { layoutsAnimation } from '../animations';
import '../components/Layouts.scss';

export default function AboutMe() {
	ReactGA.pageview(window.location.pathname);
	return (
		<React.Fragment>
			<motion.div className="layouts layout-col-2 narrow-col-1 scroll-y" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div style={{height: '200px'}}></div>
				<div className="center-col">
					<MyIntro
						name="Jarolin E. Vargas"
						title="Front-End Engineer &amp; UI/UX Designer"
						bio="I design and build unique and memorable web applications. With over 7 years of development and design experience, I’ve learned not to compromise between great design and code quality. The gap between the design and development process makes building great websites harder, and taking on both roles has allowed me to be ambitious with design, as well as code."
					/>
				</div>
			</motion.div>
			<Background>
				<motion.img className="my-portrait" src={JarolinVargas} alt="Jarolin Vargas" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}/>
				<GridDots width={140} height={140} bottom={15} right={15}/>
			</Background>
		</React.Fragment>
	)
}