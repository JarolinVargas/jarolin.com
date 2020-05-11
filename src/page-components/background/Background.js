import React from 'react';
import './Background.scss';

export function GridLines() {
    return (
        <svg className="GridLines" width="50%" height="100%" style={{position: "absolute", left: "0px", top: "0px"}}>
            <defs>
                <pattern id="grid-lines" x="10" y="10" width="20" height="20" patternUnits="userSpaceOnUse" >
                    <line x1="0" y1="0" x2="0" y2="20" style={{stroke: "#F4F4F4", strokeWidth:2}} />
                    <line x1="0" y1="0" x2="20" y2="0" style={{stroke: "#F4F4F4", strokeWidth:2}} />
                </pattern>
                <linearGradient id="gradient-1" x1="0" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" style={{fill: "url(#grid-lines)"}} />
            <rect width="20%" height="100%" x="80%" style={{fill: "url(#gradient-1)"}} />
        </svg>
    )
}

export function GridDots(props) {
    return (
        <svg width={props.width} height={props.height} style={{position: "absolute", right: props.right, bottom: props.bottom}}>
            <defs>
                <pattern id="grid-dots" x="10" y="10" width="20" height="20" patternUnits="userSpaceOnUse" >
                    <circle cx="1" cy="1" r="1" style={{stroke: "none", fill: "#BCBCBC"}} />
                </pattern>
            </defs>
            <rect width={props.width} height={props.height} style={{fill: "url(#grid-dots)"}} />
        </svg>
    )
}

export function Circle(props) {
    return (
        <div className="Circle" style={{width: props.size, height: props.size, right: props.right, top: props.top, boxShadow: props.shadow}}></div>
    )
}