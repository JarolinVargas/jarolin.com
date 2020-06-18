import React from 'react';
import { motion } from "framer";
import './Background.scss';

export function GridLines() {
    return (
        <svg className="GridLines" width="50%" height="100%" style={{position: "absolute", left: "0px", top: "0px"}}>
            <defs>
                <pattern id="grid-lines" x="10" y="10" width="20" height="20" patternUnits="userSpaceOnUse" >
                    <line x1="0" y1="0" x2="0" y2="20" style={{stroke: "rgba(255,255,255,0.08)", strokeWidth:2}} />
                    <line x1="0" y1="0" x2="20" y2="0" style={{stroke: "rgba(255,255,255,0.08)", strokeWidth:2}} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" style={{fill: "url(#grid-lines)"}} />
        </svg>
    )
}




const DotsAnim = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}

export function GridDots(props) {
    return (
        <motion.svg className={`GridDots${!props.centered ? '' : ' centered-griddots'}`} width={props.width} height={props.height} initial="initial" animate="enter" exit="exit" variants={DotsAnim} style={{right: props.right, bottom: props.bottom}}>
            <defs>
                <pattern id="grid-dots" x="10" y="10" width="20" height="20" patternUnits="userSpaceOnUse" >
                    <circle cx="1" cy="1" r="1" style={{stroke: "none", fill: "#BCBCBC"}} />
                </pattern>
            </defs>
            <rect width={props.width} height={props.height} style={{fill: "url(#grid-dots)"}} />
        </motion.svg>
    )
}



const circleAnim = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}
export function Circle(props) {
    return (
        <motion.div className="Circle" style={{width: props.size, height: props.size, right: props.right, top: props.top, boxShadow: props.shadow}} initial="initial" animate="enter" exit="exit" variants={circleAnim}></motion.div>
    )
}



const ImageAnimations = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}

export function Image(props) {
    return (
        <motion.div className={`Image${props.fade ? ' fade' : ''}`} initial="initial" animate="enter" exit="exit" variants={ImageAnimations} style={props.styles}></motion.div>
    )
}



export default function Background(props) {
    return (
        <div className="Background">
            {props.children}
        </div>
    )
}