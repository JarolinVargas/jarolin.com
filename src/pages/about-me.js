import React from 'react';
import { motion } from "framer";
import ReactGA from 'react-ga';
import MyIntro from '../page-components/MyIntro';
import Background, { GridDots } from '../page-components/Background';
import JarolinVargas from '../assets/jarolin-vargas.svg';
import '../page-components/Layouts.scss';

const layoutsAnimation = {
	initial: {
		boxShadow: '0px 0px 0px #000',
		backgroundColor: 'rgba(255, 255, 255, 0)'
	},
	enter: {
		boxShadow: '0px 0px 30px #000',
		backgroundColor: 'rgba(255, 255, 255, 0.005)'
	},
	exit: {
		boxShadow: '0px 0px 0px #000',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		borderColor: 'transparent'
	}
}


export default function AboutMe() {
	ReactGA.pageview(window.location.pathname);
	return (
		<React.Fragment>
			<motion.div className="layouts layout-col-2 narrow-col-1 scroll-y" initial="initial" animate="enter" exit="exit" variants={layoutsAnimation}>
				<div style={{height: '200px'}}></div>
				<div className="center-col">
					<MyIntro/>
				</div>
			</motion.div>
			<Background>
				<motion.img className="my-portrait" src={JarolinVargas} alt="Jarolin Vargas" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}/>
				<GridDots width={140} height={140} bottom={15} right={15}/>
			</Background>
		</React.Fragment>
	)
}