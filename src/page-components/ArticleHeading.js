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
                {props.image && <img src={props.image} alt="#"/>}
                {props.buttonLink && <ProjectButton link={props.buttonLink}/>}
            </div>
            <motion.div className="article-meta" initial="initial" animate="enter" exit="exit" variants={animations}>
                <h1 className="primary-color">{props.title}</h1>
                <ContentMeta meta={props.meta}/>
            </motion.div>
        </div>
    )
}