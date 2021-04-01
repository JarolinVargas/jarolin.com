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
						subtitle="-&nbsp;Available&nbsp;for&nbsp;freelance/full&#8209;time"
						bio="Hey! I’m a Front-End Engineer with some UI &amp; UX design skills who strives to deliver the best experience possible for the end-user. I have experience building full-scale web applications both independently, and as part of a team. While I specialize in user-facing features, I sometimes dive into the back-end with PHP and MySQL. Check out the rest of my portfolio and hit me up if you’re interested in working together. &#9996;"
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