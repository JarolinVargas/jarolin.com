import React from 'react';
import { motion } from "framer";
import IconLinks from './IconLinks';
import './MyIntro.scss';

const variants = {
    enter: {
        transition: {
            staggerChildren: 0.1
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const animations = {
    initial: {
	  x: 400,
	  opacity: 0
    },
    enter: {
	  x: 0,
	  opacity: 1
    },
    exit: {
	  x: -400,
	  opacity: 0,
	  transition: {
		  ease: 'easeOut'
	  }
    }
}

export default function MyIntro() {
    return (
        <motion.div className="MyIntro" variants={variants}>
            <motion.h1 className="my-name aboutme-gradient" variants={animations}>Jarolin Vargas</motion.h1>
            <motion.h3 className="my-title aboutme-gradient" variants={animations}>Front-End Developer &amp; UI/UX Designer</motion.h3>
            <motion.p className="my-bio" variants={animations}>Hi! I'm a Front-End Developer with experience in UI, UX, and Product Design. I place lots of focus on the small details of every project I work on, which often results in a greater overall experience and outcome.</motion.p>
			<IconLinks/>
        </motion.div>
    )
}