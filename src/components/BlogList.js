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
                props.list.map(item => {
                    return (
                        <motion.li key={item.sys.id} variants={listItems} initial="initial" whileHover={{scale: 1.02, boxShadow: '0px 0px 30px rgba(0,0,0,0.4)'}}>
                            <Link to={`/writings/${item.sys.id}/${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                                <h2 className="secondaryFont writings-gradient">{item.title}</h2>
                                <ul className="writing-meta">
                                    <li>{item.published}</li>
                                    <li>{item.topic}</li>
                                </ul>
                                {!item.listCover ? '' : <img src={item.listCover && item.listCover.url} alt={item.title}/>}
                            </Link>
                        </motion.li>
                    )
                })
            }
        </motion.ul>
    )
}
