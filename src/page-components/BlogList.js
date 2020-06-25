import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer";
import placeholder from '../assets/writings-img/placeholder.jpg'
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
        opacity: 0
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
                                <h1 className="secondaryFont writings-gradient">{l.title}</h1>
                                <ul className="writing-meta">
                                    <li>{l.published}</li>
                                    <li>{l.topic}</li>
                                </ul>
                                <img src={placeholder}/>
                            </Link>
                        </motion.li>
                    )
                })
            }
        </motion.ul>
    )
}
