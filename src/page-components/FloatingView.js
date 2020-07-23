import React, { useState , useEffect} from 'react';
import { Frame } from "framer";
import './FloatingView.scss';

export default function FloatingView(props) {
    const [active, setActive] = useState(false);
    const animations = {
        initial: {
            width: 0,
            height: 0
        },
        expand: {
            height: window.innerWidth > 430 ? 'calc(100% - 20px)' : 'calc(100vh - 200px)',
            width: window.innerWidth > 430 ? 350 : 300,
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

    useEffect(() => {
		window.addEventListener('popstate', (event) => {
            if( document.body.classList.contains('floating-view-active') ) {
                document.body.classList.remove('floating-view-active');
            }
		});
	}, []);

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
            <Frame className="FloatingView" onClick={toggleActive} style={{backgroundImage: props.gradient}} initial="initial" animate={!active ? "default" : "expand" } exit="initial" variants={animations}>
                <span className="label">{!active ? props.label : props.labelExpanded}</span>
                {!active ? '' : props.children}
            </Frame>
            <div className="floating-view-overlay" onClick={toggleActive}></div>
        </React.Fragment>
    )
}