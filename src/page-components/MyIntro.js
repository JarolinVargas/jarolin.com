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
            <motion.p className="my-bio" variants={animations}>Hi! I'm a Front-End Developer who's also skilled with UI, UX, &amp; Product Design. You'll sometimes find me on the more challenging, but satisfying and necessary paths of application development and design. I specialize in the user-facing aspects of app development, and during the last 7 years; have built some really cool stuff.</motion.p>
			<IconLinks/>
        </motion.div>
    )
}