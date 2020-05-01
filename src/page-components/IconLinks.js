import React from 'react';
import './IconLinks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function IconLinks() {
    return (
        <div className="IconLinks">
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={faDribbble} color="#EA4C89"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faGithub} color="#000000"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCodepen} color="#000000"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} color="#0274B3"/></a></li>
            </ul>
        </div>
    )
}