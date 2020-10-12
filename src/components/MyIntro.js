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

export default function MyIntro(props) {
    return (
        <motion.div className="MyIntro" variants={variants}>
            <motion.h1 className="my-name aboutme-gradient" variants={animations}>{props.name}</motion.h1>
            <motion.h3 className="my-title aboutme-gradient" variants={animations}>{props.title}<span> -&nbsp;Freelancer&nbsp;&amp;&nbsp;Contractor</span></motion.h3>
            <motion.p className="my-bio" variants={animations}>{props.bio}</motion.p>
			<IconLinks/>
        </motion.div>
    )
}