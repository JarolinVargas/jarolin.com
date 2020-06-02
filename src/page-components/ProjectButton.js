import React from 'react';
import './ProjectButton.scss';

export default function ProjectButton(props) {
    return(
        <div className="ProjectButton">
            <a href={props.link}>OPEN</a>
        </div>
    )
}