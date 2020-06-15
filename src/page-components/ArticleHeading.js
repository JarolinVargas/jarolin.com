import React from 'react';
import { motion } from "framer";
import './ArticleHeading.scss';
import ContentMeta from './ContentMeta.js';
import ProjectButton from './ProjectButton';

const animations = {
    initial: {
      x: -200,
      opacity: 0
    },
    enter: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: 200,
      opacity: 0
    }
}

export default function ArticleHeading(props) {
    return (
        <div className={`ArticleHeading${props.projectHeading ? ' project-heading' : ''}`} style={{height: props.height}}>
            <div className="article-img">
                {props.image && <motion.img src={props.image} alt="#" initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}/>}
                {props.buttonLink && <ProjectButton link={props.buttonLink}/>}
            </div>
            <motion.div className="article-meta" initial="initial" animate="enter" exit="exit" variants={animations}>
                <h1 className="primary-color">{props.title}</h1>
                <ContentMeta meta={props.meta}/>
            </motion.div>
        </div>
    )
}