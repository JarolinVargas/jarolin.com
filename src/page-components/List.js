import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './List.scss';

export default function List(props) {
    const linkClicked = (event) => {
        if( event.target.nodeName === 'A' ) {
            props.switchPage(event.target.getAttribute('href'));
        }
    }

    return (
        <ul className="List" onClick={linkClicked}>
            {props.children.map((item, i) => <li key={i}><Link to={item.link}>{item.label}</Link></li>)}
        </ul>
    )
}
