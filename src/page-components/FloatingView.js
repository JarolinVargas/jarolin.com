import React, {useState} from 'react';
import { Frame } from "framer";
import './FloatingView.scss';

const animations = {
    expand: {
        height: 'calc(100% - 20px)',
        width: 350,
        borderRadius: 30,
        backgroundColor: '#000'
    },
    default: {
        width: 100,
        height: 100,
        borderRadius: '100%',
        backgroundColor: '#000'
    }
}

export default function FloatingView() {
    const [active, setActive] = useState(0);

    function toggleActive() {
        setActive(!active ? true : false);
        if( !active ) {
            document.body.classList.add('floating-view-active');
        } else {
            document.body.classList.remove('floating-view-active');
        }
    }

    return (
        <Frame className="FloatingView" onClick={toggleActive} animate={!active ? animations.default : animations.expand }>
            {!active && <span className="label">MORE</span>}
        </Frame>
    )
}