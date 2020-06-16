import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './List.scss';

export default function List(props) {
    return (
        <ul className="List">
            {props.children.map((item, i) => <li key={i}><Link to={item.link}>{item.label}</Link></li>)}
        </ul>
    )
}
