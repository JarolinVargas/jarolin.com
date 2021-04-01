import React from 'react';
import { Link } from "react-router-dom";
import './List.scss';

export default function List(props) {
    let listItems;
    if( props.portfolioList ) {
        listItems = props.portfolioList.map((item, i) =>
            <li key={item.sys['id']}>
                <Link to={`portfolio/${item.sys['id']}`}>{item.projectTitle}</Link>
            </li>
        )
    }

    return (
        <ul className="List">
            {listItems}
        </ul>
    )
}
