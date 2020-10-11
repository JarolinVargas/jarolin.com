import React from 'react';
import { motion } from "framer";
import IconLinks from './IconLinks';
import './MyIntro.scss';

const variants = {
    enter: {
        transition: {
            staggerChildren: 0.05
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.05
        }
    }
}

const animations = {
    initial: {
	  x: 100,
	  opacity: 0
    },
    enter: {
	  x: 0,
	  opacity: 1
    },
    exit: {
	  x: -50,
	  opacity: 0,
	  transition: {
		  ease: 'easeOut'
	  }
    }
}

export default function MyIntro() {
    return (
        <motion.div className="MyIntro" variants={variants}>
            <motion.h1 className="my-name aboutme-gradient" variants={animations}>Jarolin E. Vargas</motion.h1>
            <motion.h3 className="my-title aboutme-gradient" variants={animations}>Front-End Engineer &amp; UI/UX Designer</motion.h3>
            <motion.p className="my-bio" variants={animations}>I design and build unique and memorable web applications. With over 7 years of development and design experience, I’ve learned to not compromise between great design and code quality. The gap between the design and development process makes building great websites harder, and taking on both roles has allowed me to be ambitious with design, as well as code.</motion.p>
			<IconLinks/>
        </motion.div>
    )
}