import React from 'react';
import './ItemBanner.scss';

export default function ItemBanner() {
    return (
        <a href="#" className="ItemBanner">
            <span className="banner-image">
                <div></div>
            </span>
            <span className="banner-info">
                <h2>Luminal Website Builder</h2>
            </span>
        </a>
    )
}