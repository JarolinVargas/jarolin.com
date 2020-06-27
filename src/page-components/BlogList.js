import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer";
import './BlogList.scss';

const list = {
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

const listItems = {
    initial: {
        x: -500,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: 500,
        opacity: 0,
        transition: {
            ease: 'easeOut'
        }
    }
}

export default function BlogList(props) {
    return (
        <motion.ul className="BlogList" variants={list} initial="exit" animate="enter" exit="exit">
            {
                props.list.map((l, i) => {
                    return (
                        <motion.li key={i} variants={listItems} initial="initial" whileHover={{scale: 1.02, boxShadow: '0px 0px 30px rgba(0,0,0,0.4)'}}>
                            <Link to={`writings/${l.slug}`}>
                                <h2 className="secondaryFont writings-gradient">{l.title}</h2>
                                <ul className="writing-meta">
                                    <li>{l.published}</li>
                                    <li>{l.topic}</li>
                                </ul>
                                <img src={l.cover}/>
                            </Link>
                        </motion.li>
                    )
                })
            }
        </motion.ul>
    )
}
