import React from 'react';
import { Link } from "react-router-dom";
import placeholder from '../assets/writings-img/placeholder.jpg'
import './BlogList.scss';

export default function BlogList(props) {
    return (
        <ul className="BlogList">
            {
                props.list.map((l, i) => {
                    return (
                        <li key={i}>
                            <Link to={`writings/${l.slug}`}>
                                <h1 className="secondaryFont writings-gradient">{l.title}</h1>
                                <ul className="writing-meta">
                                    <li>{l.published}</li>
                                    <li>{l.topic}</li>
                                </ul>
                                <img src={placeholder}/>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
