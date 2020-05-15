import React from 'react';
import './ContentMeta.scss';

export default function ContentMeta(props) {
    return (
        <ul className="content-meta">
            <li>
                <span className="cm-label">label</span>
                <h5 className="cm-value">July 24, 2020</h5>
            </li>
            <li>
                <span className="cm-label">label</span>
                <h5 className="cm-value">July 24, 2020</h5>
            </li>
            <li>
                <span className="cm-label">label</span>
                <h5 className="cm-value">July 24, 2020</h5>
            </li>
        </ul>
    );
}