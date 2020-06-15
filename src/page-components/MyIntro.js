import React from 'react';
import { motion } from "framer";
import './MyIntro.scss';

const animations = {
    initial: {
      x: 200,
      opacity: 0
    },
    enter: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -200,
      opacity: 0
    }
}

export default function MyIntro() {
    return (
        <div className="MyIntro">
            <motion.h1 className="my-name primary-color" initial="initial" animate="enter" exit="exit" variants={animations}>Jarolin Vargas</motion.h1>
            <motion.h3 className="my-title secondary-color" initial="initial" animate="enter" exit="exit" variants={animations} transition={{delay: .05}}>Front-End Developer • UI/UX Designer</motion.h3>
            <motion.p className="my-bio" initial="initial" animate="enter" exit="exit" variants={animations} transition={{delay: .10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</motion.p>
        </div>
    )
}