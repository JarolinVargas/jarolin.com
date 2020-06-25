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
	  y: 400,
	  opacity: 0
    },
    enter: {
	  y: 0,
	  opacity: 1
    },
    exit: {
	  y: -400,
	  opacity: 0
    }
}

export default function MyIntro() {
    return (
        <motion.div className="MyIntro" variants={variants}>
            <motion.h1 className="my-name aboutme-gradient" variants={animations}>Jarolin Vargas</motion.h1>
            <motion.h3 className="my-title aboutme-gradient" variants={animations}>Front-End Developer &amp; UI/UX Designer</motion.h3>
            <motion.p className="my-bio" variants={animations}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</motion.p>
			<IconLinks/>
        </motion.div>
    )
}