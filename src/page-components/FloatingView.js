import React, {useState} from 'react';
import { Frame } from "framer";
import './FloatingView.scss';

const animations = {
    initial: {
        width: 0,
        height: 0
    },
    expand: {
        height: 'calc(100% - 20px)',
        width: 350,
        borderRadius: '30px',
        overflowY: 'scroll'
    },
    default: {
        width: 100,
        height: 100,
        borderRadius: 350,
        overflowY: 'hidden'
    }
}

export default function FloatingView(props) {
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
        <React.Fragment>
            <Frame className="FloatingView" onClick={toggleActive} style={{backgroundImage: props.pageGradient}} initial="initial" animate={!active ? "default" : "expand" } exit="initial" variants={animations}>
                <span className="label">{!active ? 'More' : `More ${props.label}`}</span>
                {!active ? '' : props.children}
            </Frame>
            <div className="floating-view-overlay" onClick={toggleActive}></div>
        </React.Fragment>
    )
}