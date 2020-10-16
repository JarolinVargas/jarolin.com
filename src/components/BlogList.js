import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer";
import './BlogList.scss';

const list = {
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

const listItems = {
    initial: {
        x: -100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: 50,
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
                            <Link to={`/writings/${l.sys['id']}/${l.title.toLowerCase().replace(/\s/g, '-')}`}>
                                <h2 className="secondaryFont writings-gradient">{l.title}</h2>
                                <ul className="writing-meta">
                                    <li>{l.published}</li>
                                    <li>{l.topic}</li>
                                </ul>
                                {!l.listCover ? '' : <img src={l.listCover && l.listCover.url} alt={l.title}/>}
                            </Link>
                        </motion.li>
                    )
                })
            }
        </motion.ul>
    )
}