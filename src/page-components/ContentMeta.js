import React from 'react';
import './ContentMeta.scss';

export default function ContentMeta(props) {
    return (
        <ul className="content-meta">
            <li>
                <span className="cm-label secondary-color">label</span>
                <h5 className="cm-value secondary-color">July 24, 2020</h5>
            </li>
            <li>
                <span className="cm-label secondary-color">label</span>
                <h5 className="cm-value secondary-color">July 24, 2020</h5>
            </li>
            <li>
                <span className="cm-label secondary-color">label</span>
                <h5 className="cm-value secondary-color">July 24, 2020</h5>
            </li>
        </ul>
    );
}