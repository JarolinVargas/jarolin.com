import React from 'react';
import './ListLabel.scss';

export default function ListLabel(props) {
    return (
        <ul className="ListLabel" style={props.style}>
            <li>
                <span className="list-label">CONTEXT</span>
                <h3 className="list-heading primary-color">Personal Project</h3>
            </li>
            <li>
                <span className="list-label">DURATION</span>
                <h3 className="list-heading primary-color">Jan 2018 - Dec 2020</h3>
            </li>
            <li>
                <span className="list-label">ROLE</span>
                <h3 className="list-heading primary-color">Developer &amp; Designer</h3>
            </li>
        </ul>
    )
}