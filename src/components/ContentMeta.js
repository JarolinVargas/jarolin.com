import React from 'react';
import './ContentMeta.scss';

export default function ContentMeta(props) {
    return (
        <ul className="content-meta">
            {props.meta.map((m, i) => <li key={i}><span className="cm-label secondary-color">{m.label}</span><h5 className="cm-value secondary-color">{m.value}</h5></li>)}
        </ul>
    );
}