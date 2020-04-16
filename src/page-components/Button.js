import React from 'react';
import './Button.scss';
import dotsGrid from '../assets/dots-grid.svg';

export default function Button() {
    return(
        <div className="button btn-style-1">
            <a href="#">
                {<img src={dotsGrid} alt="dots"/>}
                <span>Resume</span>
            </a>
        </div>
    )
}