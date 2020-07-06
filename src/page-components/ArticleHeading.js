import React from 'react';
import { motion } from "framer";
import './ArticleHeading.scss';
import ContentMeta from './ContentMeta.js';
import ProjectButton from './ProjectButton';

const animations = {
	initial: {
		y: -200,
		opacity: 0
	},
	enter: {
		y: 0,
		opacity: 1
	},
	exit: {
		y: 500,
		opacity: 0,
		transition: {
			ease: 'easeOut'
		}
	}
}

const staggerAnimation = {
	enter: {transition: {staggerChildren: 0.1}},
	exit: {transition: {staggerChildren: 0.1}}
}

export default function ArticleHeading(props) {
	return (
		<motion.div className={`ArticleHeading${props.projectHeading ? ' project-heading' : ''}`} initial="initial" animate="enter" exit="exit"  variants={staggerAnimation} style={{height: props.height}}>
			{props.image || props.buttonLink && <motion.div className="article-img" variants={animations}>
				{props.image && <img src={props.image} alt={props.title}/>}
				{props.buttonLink && <ProjectButton link={props.buttonLink}/>}
			</motion.div>}
			<motion.div className="article-meta" variants={animations}>
				<h1 className={props.gradientClass}>{props.title}</h1>
				<ContentMeta meta={props.meta}/>
			</motion.div>
		</motion.div>
	)
}