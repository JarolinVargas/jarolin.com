import React from 'react';
import './MyIntro.scss';
import Button from './Button';

export default function MyIntro() {
    return (
        <div className="MyIntro">
            <h1 className="my-name">Jarolin Vargas</h1>
            <p className="my-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <Button/>
        </div>
    )
}